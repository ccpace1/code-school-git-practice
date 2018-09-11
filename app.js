// The main Point of Entry for To Do node.JS app
const config = require('./config');

const express = require('express');
const app = express();
const port = 3000;
//connection listening
console.log("Listening on port " + port + "...");
app.listen(port);

//mogo stuff

const mongoose = require('mongoose');

//actually connect to the datebade
mongoose.connect(config.getDbConnectionString(),{ useNewUrlParser: true }).then(()=> {
        console.log("Successfully connected to the database.");
    },
    err => {
        console.log("ERROR connecting to the database.");
        throw err;
    }
);

const controller = require('./controllers/setupController');
controller(app);