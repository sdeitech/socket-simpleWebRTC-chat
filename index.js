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
//Create an HTTP service.
//var server = http.createServer(app);
// Create an HTTPS service identical to the HTTP service.
var server = https.createServer(options, app);

var io = require('socket.io').listen(server);

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
//server.listen(3000);
server.listen(4141);
  
