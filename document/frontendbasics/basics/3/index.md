# 3. 鼠标点击拖动页面的dom节点

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title></title>
    <style>
        #box {
            height: 100px;
            width: 100px;
            background: red;
            position: absolute;
            cursor: move;
        }
    </style>
</head>

<body>
    <div id="box"></div>
</body>
<script>
    //兼容火狐，解决火狐offsetX不兼容问题
    function coordinate(e) {
        var evt = window.event || e,
            coord,
            coord_X,
            coord_Y;
        coord_X = (evt.offsetX === undefined) ? getOffset(evt).X : evt.offsetX;
        coord_Y = (evt.offsetY === undefined) ? getOffset(evt).Y : evt.offsetY;
        coord = { "coord_X": coord_X, "coord_Y": coord_Y };
        return coord;
    }
    //获取要拖动的元素
    var box = document.getElementById("box");
    //鼠标落下
    box.onmousedown = function (evt) {
        evt = evt || window.event;
        var boxX = coordinate(evt).coord_X;
        var boxY = coordinate(evt).coord_Y;
        //鼠标移动
        document.onmousemove = function (evt) {

            evt = evt || window.event;
            var posX = evt.clientX;
            var posY = evt.clientY;
            console.log(posX);
            box.style.left = (posX - boxX) + 'px';
            box.style.top = (posY - boxY) + 'px';

        }
        //鼠标抬起
        box.onmouseup = function (evt) {
            evt = evt || window.event;
            document.onmousemove = null;
            document.onmousedown = null;
        }
    }
</script>

</html>
```
