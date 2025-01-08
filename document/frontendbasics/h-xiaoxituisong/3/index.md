---
title: 3. 基于 Koa2 与 Socket.io 构建实时多人互动应用
order: 3
---

# 3. 基于 Koa2 与 Socket.io 构建实时多人互动应用

在当今互联网时代，实时交互功能已成为众多 Web 应用不可或缺的部分，从在线游戏、群组聊天到实时协作办公，用户对即时信息传递的需求日益增长。Koa2 作为一款轻量级、高效的 Node.js Web 框架，结合强大的 Socket.io 库，为开发者提供了便捷的工具来打造此类实时应用。本文将详细介绍如何使用 Koa2 和 Socket.io 构建一个包含房间功能的实时多人互动应用，让你轻松掌握这一热门技术组合。

## 一、项目初始化与基础搭建
首先，创建一个新的项目目录，在终端进入该目录后执行以下命令初始化项目：
```bash
npm init -y
```
这将快速生成一个 `package.json` 文件，用于管理项目依赖。接着，安装所需的核心依赖：
```bash
npm install koa koa-router socket.io koa-static --save
```
 - `koa` 是构建 Web 应用的基础框架，提供简洁的异步流程控制与中间件机制，助力高效开发。
 - `koa-router` 用于方便地定义路由，精准处理不同 URL 路径的请求，实现业务逻辑的模块化。
 - `socket.io` 是实现实时双向通信的关键，驱动应用内的实时交互，让信息即时传递。
 - `koa-static` 能轻松将静态文件（如 HTML、CSS、JavaScript 等）对外提供服务，为前端页面搭建提供便利。

## 二、Koa2 服务器搭建与配置
在项目根目录下新建 `server.js` 文件，作为服务端的入口：
```javascript
/**
 * "dependencies": {
    "ejs": "^3.1.10",
    "koa": "^2.14.2",
    "koa-router": "^12.0.1",
    "koa-static": "^5.0.0",
    "koa-views": "^8.1.0",
    "koa-websocket": "^6.0.0",
    "openai": "^4.24.1",
    "socket.io": "^4.8.1"
  }
 */
const Koa = require('koa');
const views = require('koa-views')
const router = require('koa-router')();
const app = new Koa();
const server = require('http').createServer(app.callback());
const serve = require('koa-static');

const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});
// 配置静态资源中间件，假设静态文件存放在 public 目录
app.use(serve(__dirname + '/public'));
app.use(views(__dirname + '/views', { extension: 'ejs' }));// 这种写index.ejs

router.get('/', async (ctx) => {
    await ctx.render('index', {
        title: 'socket.io chat',
    })
})

app.use(router.routes())//启动路由
app.use(router.allowedMethods())

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```
这里创建了 Koa2 应用实例 `app` 和路由实例 `router`，借助 `http.createServer` 结合 `app.callback()` 搭建 HTTP 服务器，并将 `socket.io` 绑定其上。同时，利用 `koa-static` 把 `public` 目录设为静态资源目录对外服务，最后启动服务器监听 `3000` 端口，此时访问 `http://localhost:3000` 就能看到测试欢迎信息。

## 三、Socket.io 房间功能实现
在 `server.js` 文件中深入拓展 `socket.io` 的功能，加入房间相关逻辑：
```javascript
io.on('connection', (socket) => {
    console.log('A client has connected');
    socket.on('joinRoom', (roomId) => {
        socket.join(roomId);
        console.log(`Client joined room: ${roomId}`);
        // 向房间内所有成员广播新成员加入消息
        io.to(roomId).emit('roomMessage', `New member joined the room: ${roomId}`);
    });
    socket.on('sendMessageToRoom', (roomId, msg) => {
        io.to(roomId).emit('roomMessage', `[${roomId}] ${msg}`);
    });
    socket.on('leaveRoom', (roomId) => {
        socket.leave(roomId);
        console.log(`Client left room: ${roomId}`);
        // 向房间内剩余成员广播成员离开消息
        io.to(roomId).emit('roomMessage', `A member left the room: ${roomId}`);
    });
    socket.on('disconnect', () => {
        console.log('A client has disconnected');
    });
});
```
当客户端连接时，服务端记录连接信息。客户端能通过发送 `joinRoom` 事件加入指定房间，服务端将其加入并向房内广播新成员加入；发送 `sendMessageToRoom` 事件向房内发消息，服务端精准广播；发送 `leaveRoom` 事件离开房间，服务端处理离开并广播，确保房间内互动实时且有序。

## 四、客户端页面搭建
在 `public` 目录下创建 `index.html` 文件构建前端：
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title><%=title-%></title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }

        #roomList {
            border: 1px solid #ccc;
            padding: 10px;
            width: 20%;
            float: left;
        }

        #chatBox {
            border: 1px solid #ccc;
            height: 300px;
            overflow-y: scroll;
            padding: 10px;
            width: 75%;
            float: right;
        }

        #messageInput {
            width: 70%;
            margin-right: 5%;
        }

        button {
            width: 25%;
        }
    </style>
</head>

<body>
    <h1>Welcome to the Chat Rooms</h1>
    <div id="roomList">
        <h3>Available Rooms</h3>
        <ul id="roomUl"></ul>
        <input type="text" id="newRoomInput" placeholder="Create New Room">
        <button onclick="createNewRoom()">Create</button>
    </div>
    <div id="chatBox"></div>
    <input type="text" id="messageInput" placeholder="Type your message">
    <button onclick="sendMessage()">发送</button>
    <button onclick="disconnect()">断开</button>

    <!-- 从 node_modules/socket.io-client/dist/socket.io.min.js 中复制出来的，保证版本一致性 -->
    <script src="/socket.io.min.js"></script>
    <script>
        const socket = io.connect('http://localhost:3000/');
        socket.on('connect', () => {
            console.log('Connected to the server');
        });
        socket.on('roomMessage', (msg) => {
            const chatBox = document.getElementById('chatBox');
            chatBox.innerHTML += `<p>${msg}</p>`;
        });
        function createNewRoom() {
            const newRoomInput = document.getElementById('newRoomInput');
            const roomId = newRoomInput.value;
            if (!roomId) {
                alert('Please enter a room ID');
                return;
            }
            socket.emit('joinRoom', roomId);
            document.getElementById('roomUl').setAttribute('data-room-id', roomId);
            newRoomInput.value = '';
        }
        function sendMessage() {
            const messageInput = document.getElementById('messageInput');
            const msg = messageInput.value;
            const roomId = document.getElementById('roomUl').getAttribute('data-room-id');
            socket.emit('sendMessageToRoom', roomId, msg);
            messageInput.value = '';
        }
        function disconnect() {
            const roomId = document.getElementById('roomUl').getAttribute('data-room-id');
            socket.emit('leaveRoom', roomId);
            setTimeout(() => {
                socket.disconnect();
            }, 100);
        }
        window.addEventListener('beforeunload', function (e) {
            const roomId = document.getElementById('roomUl').getAttribute('data-room-id');
            if (roomId) {
                socket.emit('leaveRoom', roomId);
            }
            e.returnValue = '确定要关闭页面吗？';
        });
    </script>
</body>

</html>
```
客户端页面含房间列表展示区、聊天框、输入框与按钮。连接服务器后监听 `roomMessage` 接收房内消息并展示，通过 `createNewRoom` 函数创建新房间（即加入新房间），`sendMessage` 函数向当前所在房间发消息，实现多人在不同房间实时互动交流。

## 五、运行与拓展
在终端执行 `node server.js` 启动服务端，在浏览器访问 `http://localhost:3000` 打开多个客户端页面，用户即可创建房间、加入房间、发送消息，实时看到互动效果。你还可按需拓展功能，如添加用户认证、优化房间管理逻辑、美化界面设计等，让应用更加完善强大，满足多样化实时交互需求。 
