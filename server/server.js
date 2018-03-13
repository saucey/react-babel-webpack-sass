'use strict';

const express = require('express');
const path = require('path');
const WebSocket = require('ws');

const app = express();

const wss = new WebSocket.Server({port: 9999});

let usersInLobby = [];
let room = [];
let usersInRoom = [];

wss.broadcast = function broadcast(data) {

  wss.clients.forEach(function each(client) {
    client.send(data);
  });
 
};

wss.broadcastTo = function broadcast(target, data) {

  wss.clients.forEach(function each(client) {

    console.log(usersInRoom.room, 'grrr');
    console.log('========================================================================================')
    // console.log(JSON.stringify(Object.keys(usersInRoom)), 'grrr');

    console.log(JSON.stringify(Object.keys(JSON.stringify(usersInRoom))), 'LOG object keys users in room!!!!!');
    console.info(JSON.stringify(Object.keys(JSON.stringify(usersInRoom))), 'INFO object keys users in room!!!!!');

    if (client === usersInLobby[target]) {
      client.send(data);
    }

  });

};

// function broadcast(message){
//   wss.clients.forEach(client => {
//     if(client.room.indexOf(JSON.parse(message).room)>-1) {
//       client.send(message)
//     }
//   })
// };

// ws.on('message', message=> {
//   var messag=JSON.parse(message);
//   //}catch(e){console.log(e)}
//   if(messag.join){ws.room.push(messag.join)}
//   if(messag.room){broadcast(message);}
//   if(messag.msg){console.log('message: ',messag.msg)}
// })

//   ws.on('error',e=>console.log(e))
//   ws.on('close',(e)=>console.log('websocket closed'+e))

// });

// maintain list of current users
wss.on('connection', (ws) => {
  ws.room = [];

  ws.on('message', (message) => {

    message = JSON.parse(message);

    if (message.action === 'addRoom') {

      ws.room.push(message)

      usersInRoom[message] = ws

      room[message.room] = ws;
      wss.broadcastTo(message.from, JSON.stringify({usernames: message.username, messageType: 'enterGame'}));
    }    

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









