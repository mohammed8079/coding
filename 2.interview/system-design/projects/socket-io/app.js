var app = require('express')();
var http = require('http').Server(app);

var path = require('path')

var io = require('socket.io')(http)

app.get('/', (req, res) => {
    var options = {
        root: path.join(__dirname)
    }

    var fileName = 'index.html'
    res.sendFile(fileName, options)
})

io.on('connection', (socket) => {
    console.log('A user connected')
    socket.on('disconnect', () => {
        console.log('A user disconnected')
    })
})

http.listen(3000, () => console.log('Service running on port no 3000') )