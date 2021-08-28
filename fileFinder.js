
const regex = /.txt|.html/;
const fs = require("fs");
const {sendInstructions} =require("./clientInstructions");


const fileFinder = (file, client) => {

  if (file.match(regex)) {
    fs.readFile(file, (err, data) => {
      if (err) {
        client.write("Sorry your file could not be found/accessed");
        client.process = "";
        sendInstructions(client);
        return
      }
      client.process = "";
      client.write(`\nData retrieved from ${file}:\n ${data} \n`);
      sendInstructions(client);
      return 'Success';
    })
  }
  else {
  client.write("Please enter a filename: (.html or .txt)")
  }
};


module.exports = {
  fileFinder
};

