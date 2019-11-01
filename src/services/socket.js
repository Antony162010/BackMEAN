/*
    Init of services real time
*/

var init = function (app) {
    const server = require('http').Server(app),
        io = require('socket.io')(server)

    io.on('connection', function (socket) {

        socket.on('disconnect', function () {
            console.log('Disconnecting...')
        });
    });

    return server
}

module.exports = init
