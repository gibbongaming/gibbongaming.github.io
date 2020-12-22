// Dependencies
const io = require('socket.io')();



io.on('connection', (client) => {
    // here you can start emitting events to the client 
});

const port = 3000;
io.listen(port);
console.log('listening on port ', port);

// Routing
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, '/public/index.html'));
});

// Starts the server.
server.listen(5000, function() {
    console.log('Starting server on port 5000');
});

// Add the WebSocket handlers
io.on('connection', function(socket) {
});


setInterval(function() {
    io.sockets.emit('message', 'hi!');
}, 1000);