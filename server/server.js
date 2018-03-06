'use strict';

const express = require('express');
const path = require('path');
const WebSocket = require('ws');

const app = express();

const wss = new WebSocket.Server({port: 9000});
let usersInLobby = [];

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    client.send(data);
  });
};

wss.broadcastTo = function broadcast(target, data) {
  wss.clients.forEach(function each(client) {
    if (client === usersInLobby[target]) {
      client.send(data);
    }
  });
};

// maintain list of current users
wss.on('connection', (ws) => {
  ws.on('message', (message) => {

    message = JSON.parse(message);

    if (message.action === 'add') {
      usersInLobby[message.username] = ws;
      wss.broadcast(JSON.stringify({usernames: Object.keys(usersInLobby), messageType: 'enter'}));
    }

    if (message.action === 'remove') {
      delete usersInLobby[message.username];
    }

  });

});
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8008');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/entered-lobby', function (req, res) {

  wss.broadcast(JSON.stringify({username: req.query.username, messageType: 'enter'}));

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({success: true}));
});

app.get('/selected-user', function (req, res) {
  
  const message = JSON.stringify({username: req.query.username, messageType: 'selectedUser', from: req.query.from});

  wss.broadcastTo(req.query.username, message);

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({success: true}));
});

// app.get('/get-current-users', function (req, res) {
//   res.setHeader('Content-Type', 'application/json');
//   res.send(JSON.stringify({success: true, users: Object.keys(usersInLobby)}));
// });

app.get('/log-out-all', function (req, res) {
  usersInLobby = []

  console.log(Object.keys(usersInLobby), 'all users logged out!!!')

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({success: true, users: Object.keys(usersInLobby)}));
});

app.get('/leave-lobby', function (req, res) {
  wss.broadcast(JSON.stringify({username: req.query.username, messageType: 'leave'}));

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({success: true}));
});

app.get('/send-msg', function (req, res) {
  const message = JSON.stringify({username: req.query.username, messageType: 'message', message: req.query.message});

  if (req.query.pm) {
    wss.broadcastTo(req.query.pm, message);
  }
  else {
    wss.broadcast(message);
  }

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({success: true}));
});

app.get('/send-move', function (req, res) {
  const message = JSON.stringify({username: req.query.username, messageType: 'move', message: req.query.deck});

  if (req.query.pm) {
    wss.broadcastTo(req.query.pm, message);
  }
  else {
    wss.broadcast(message);
  }

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({success: true}));
});

app.listen(5000, function () {
  console.log('Listening on %d', 5000);
});









