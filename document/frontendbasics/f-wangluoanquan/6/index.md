# 6. 请求的header里面有什么参数

HTTP 请求的 header（首部）可以包含很多不同的参数，以下是一些常见的参数：

## **一、通用首部**
1. `Cache-Control`：用于控制缓存行为，例如 `Cache-Control: no-cache` 表示不使用缓存，`Cache-Control: max-age=3600` 表示资源在 3600 秒内有效可以直接从缓存中获取。
2. `Connection`：表明客户端与服务器之间的连接类型，比如 `Connection: keep-alive` 表示保持连接，以便后续请求复用。
3. `Date`：表示消息产生的时间。
4. `Remote Address`：表示请求的远程地址，通常是客户端的 IP 地址和端口号（`如：
201.128.39.15:443`）。
5. `Request Method`：表示请求的方法，如 GET、POST、PUT、DELETE 等。
6. `Request URL`：表示请求的 URL 地址。
7. `Status Code`：表示服务器响应的状态码，用于指示请求的处理结果，如 200 表示成功，404 表示未找到资源，500 表示服务器内部错误等(如：`200 OK (from disk cache)`)。

## **二、请求首部(Request Headers)**
1. `Accept`：告知服务器客户端能够接受的内容类型，例如 `Accept: application/json` 表示客户端希望接收 JSON 格式的数据。
2. `User-Agent`：标识发出请求的客户端软件信息，例如浏览器类型和版本等。
3. `Referer`：表示当前请求的来源页面地址。
4. `Authorization`：用于包含授权信息，如在进行身份验证时可能包含令牌等信息。

## **三、响应首部(Repose Headers)**

1. `Content-Type`：表明响应体的内容类型，如 `Content-Type: text/html`。
2. `Content-Length`：指示响应体的长度。
3. `Set-Cookie`：用于服务器向客户端设置 Cookie。
4. `Last-Modified`：表示资源的最后修改时间。
5. `Access-Control-Allow-Methods`：指定服务器允许的 HTTP 方法，例如 `Access-Control-Allow-Methods: GET, POST, PUT, DELETE`。这个首部通常在跨域请求中使用，用于告知浏览器服务器允许哪些 HTTP 方法的跨域请求。
6. `Access-Control-Allow-Origin`：指定允许访问资源的源（Origin），例如 `Access-Control-Allow-Origin: http://example.com`。同样在跨域请求中起关键作用，控制哪些源可以访问该资源。
7. `Age`：表示资源在代理缓存中的时间，以秒为单位。它可以帮助客户端判断资源的新鲜度。

