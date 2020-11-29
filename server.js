var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));

var io = require('socket.io')(server);

io.on('connection', function (socket) {
  socket.on('message', function (msg) {
    io.emit('message', msg);
  });
    socket.on('initial', function (msg) {
    io.emit('intial', msg);
  });
    
});


let port = process.env.PORT;
if (port == null || port == "") {
    port = 8080;
}

server.listen(port, function () {
    console.log("Chat server running on port: http://localhost:8080");
});
