const net = require('net');
const { guid } = require('./generateRandomId');
const port = 3001; // we can define the port 

const {fileFinder} = require("./fileFinder");
const {sendInstructions} =require("./clientInstructions");

// create a tcp server
const server = net.createServer();
const listOfClients = []




server.on('connection', (client) => {

  // let the server know
  client.setEncoding('utf8')
  client.process="";
  client.id = guid();

  // add our connection (client) to our list of clients
  listOfClients.push(client)

  sendInstructions(client);



  client.on('data', (data) => {
  
  if(data.trim() === '1'){
    client.process = 'process-1';
  }
  if (client.process === 'process-1'){
    fileFinder(data.trim(), client);
  }
  })

  client.on('close', () => {
    console.log('Client has left: ', client.id);
  });

})

server.listen(port, () => {
  console.log(`🦜 server is listening on port ${port}`)
})


module.exports = {
  sendInstructions
}