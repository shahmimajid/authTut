//npm modules
const express = require('express');
const uuid = require('uuid/v4');

// create the server
const app = express();

// create the homepage route at '/'
app.get('/', (req, res) => {
    console.log(req)
    const uniqueId = uuid()
    res.send(`Hit home page. Received the unique id: ${uniqueId}\n`)
  })

// tell the server what port to listen on
app.listen(3000, () => {
  console.log('Listening on localhost:3000')
})