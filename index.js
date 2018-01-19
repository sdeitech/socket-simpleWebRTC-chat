var app = require('express')();
var crypto = require('crypto');
var fs = require("fs");
var http = require('http');
var https = require('https');
var env = app.get('env');
// var __dirname = '/home/anubhavg/Desktop/socket-simpleWebRTC-chat/';
// var privateKey = '/home/anubhavg/Desktop/socket-simpleWebRTC-chat/stagingsdei_com.key';
// var certificate = '/home/anubhavg/Desktop/socket-simpleWebRTC-chat/c86aaff33f318ca4.crt';

  var __dirname = '/home/SocketChat/socket-simpleWebRTC-chat/';  
  var privateKey = '/home/SocketChat/socket-simpleWebRTC-chat/stagingsdei_com.key';
  var certificate = '/home/SocketChat/socket-simpleWebRTC-chat/c86aaff33f318ca4.crt';  


var options = {
  key: fs.readFileSync(privateKey),
  cert: fs.readFileSync(certificate)
};

var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
console.log('env',env);

io.on('connection', function(socket){
console.log('connected');
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
  });

// Create an HTTP service.
//http.createServer(app).listen(3000);
// Create an HTTPS service identical to the HTTP service.
https.createServer(options, app).listen(4141);

// http.listen(4141, function(){
//   console.log('listening on *:4141');
// });
