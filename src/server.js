const webSocketsServerPort = 8000;
const webSocketServer = require('websocket').server;
const http = require('http');

const server = http.createServer();
server.listen(webSocketsServerPort);
const wsServer = new webSocketServer({
    httpServer: server
});

const clients = {};

const getUniqueId = () => {
    const s4 = () => Math.floor((1 + Math.random())*0x1000).toString(16).substring(1);
    return s4() +s4() + '-' +s4();
};

wsServer.on('request',function(request){
    let userID = getUniqueId();
    console.log((new Date()) + 'Received a new connection from origin ' + request.origin + '.');
    const connection = request.accept(null, request.origin);
    clients[userID]= connection;
    console.log('connected: ' + userID + 'in' + Object.getOwnPropertyNames(clients))
})