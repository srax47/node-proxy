var port = process.env.PROXY_PORT;
var downstream = process.env.DOWNSTREAM_HOST + ':' + process.env.DOWNSTREAM_PORT;

require('http-proxy')
  .createProxyServer({target: downstream})
  .listen(port);
