var app = require('express')();
var http = require('http').Server(app);
var __dirname = '/home/anubhavg/Desktop/socket-text-chat/';
//var __dirname = './socket-text-chat'

var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/video_call', function(req, res){
  res.sendFile(__dirname + '/simpleRTC.html');
});
console.log('io',io);
io.on('connection', function(socket){
console.log('connected');
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
  });
http.listen(3000, function(){
  console.log('listening on *:3000');
});
