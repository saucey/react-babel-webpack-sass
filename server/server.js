const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const app = express();
const config = require('../webpack.config.js');
const compiler = webpack(config);



app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  noInfo: true,
}));

app.use(webpackHotMiddleware(compiler));

app.get('/trigger', function (req, res) {
  var Pusher = require('pusher');

  var pusher = new Pusher({
    appId: '406188',
    key: '4014bb66ddc0aea56d6c',
    secret: 'bd1a043587da29142c46',
    cluster: 'eu',
    encrypted: true
  });

  pusher.trigger('my-channel', 'my-event', {
    "message": "hello world"
  });

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({success: true}));
});

app.listen(3333, function () {
  console.log('Example app listening on port 3000!\n');
});
