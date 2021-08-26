const net = require('net');

const server = net.createServer();
const client = net.createConnection({port: 3000});
// server.js
// add this line after server is created, before listen is called
server.on('connection', (client) => {
  console.log('New client connected!');
  client.write('Hello there!');
});


client.setEncoding('utf8'); // interpret data as text
client.on('data', (data) => {
  console.log('Message from client: ', data)
});

server.listen(3000, () => {
  console.log('Server listening on port 3000!');
});