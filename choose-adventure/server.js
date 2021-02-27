const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 3001;
app.use(cookieParser());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/chooseadventure');

const User = require('./models/User');

const userInput = {
  username : "admin",
  password : "admin"
}

const user = new User(userInput);
user.save((err,document) => {
  if(err)
    console.log(err);
  console.log(document);
});

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});