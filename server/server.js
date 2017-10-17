const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const app = express();
const config = require('../webpack.config.js');
const compiler = webpack(config);
const CLIENTS = [];
var count = 0;

// const http = require('http').Server(app),
const http = require('http').Server(app);
WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({
      port: 8888,
      path:'/welcome'
    });

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  noInfo: true,
}));

app.use(webpackHotMiddleware(compiler));

// app.post('/trigger', function (req, res) {
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {

    console.log(client, '!!!!!!! CLIENT');
    // var Id = count++;
    // console.log(count++,'!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!' );
    client.send(data);
  });
};

wss.on('connection', function(ws) {
  CLIENTS.push(ws);
  ws.on('message', function(msg) {
    data = JSON.parse(msg);
    if (data) wss.broadcast(data.name);
  });

  ws.on('close', function(data) {
    // data = JSON.parse(msg);
    // if (data) wss.broadcast(data.name);
  });
});

// });

http.listen(3333, function () {
  console.log('Example app listening on port 3333!\n');
});


