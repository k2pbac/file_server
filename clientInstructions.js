let options = `
  1. Enter 1 to view a file (if it exists)
  2. Enter 2 to create a file
  3. Enter 3 to delete a file
`

const sendInstructions = (client) => {
  
  client.write(`\nWelcome to File Services Server\n`);
  client.write('You have the following commands available:\n')
  client.write(options)

}


module.exports = {
  sendInstructions
}