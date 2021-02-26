const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require('passport');

const users = require('./routes/api/users');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));

const db = require("./config/keys").mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
.then(() => console.log("MongoDB successfully connected!"))
.catch(err => console.log(err));

app.use(passport.initialize());

require('./config/passport')(passport);

app.use('/api/users', users);

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});