//npm modules
const express = require('express');
const uuid = require('uuid/v4');
const session = require('express-session');

// create the server
const app = express();

// add & configure middleware
app.use(session({
    genid: (req) => {
      console.log('Inside the session middleware')
      console.log(req.sessionID)
      return uuid() // use UUIDs for session IDs
    },
    secret: 'this is Malaysia',
    resave: false,
    saveUninitialized: true
  }))

// create the homepage route at '/'
app.get('/', (req, res) => {
    console.log('Inside the homepage callback function')
    console.log(req.sessionID)
    res.send(`You hit home page!\n`)
  })

// tell the server what port to listen on
app.listen(3000, () => {
  console.log('Listening on localhost:3000')
})