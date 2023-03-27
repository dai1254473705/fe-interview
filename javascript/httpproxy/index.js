var http = require('http');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});
// httpProxy.createProxyServer({ target: 'http://localhost:8000' }).listen(8010); // See (†)

proxy.on('proxyRes', function (proxyReq, req, res, options) {
    console.log(options);
    proxyReq.setHeader('X-Special-Proxy-Header', 'foobar');
    proxyReq.setHeader('u-name', 'sdd');
});
var server = http.createServer(function (req, res) {
    console.log('=======adsfasdfasdf');
    proxy.web(req, res, {
        target: 'http://127.0.0.1:8000'
    });
})
server.listen(9000);
