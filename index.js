const express = require('express');
const app = express();

const server = app.listen(3000, function() {
    console.log('Server running on port 3000');
})

const io = require('socket.io')(server);

io.on('connection', function(socket) {
    console.log('Woah! A client has showed up!');

    socket.emit('greeting', { message : 'A client has joined the server' });

    socket.on('disconnect', function() {
        console.log('Oh no! A client has left the server')
    })
})