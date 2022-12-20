const express = require('express')
const path = require('path')
const app = express()
var mongoose = require('mongoose');
const bodyparser = require("body-parser")
const fs = require('fs')
const port = 80
var http = require('http')

// ****BY ENTERING THE PASSWORD WE CAN SAVE THE DATA TO THE MONGODB ATLAS SERVER DATABASE***//
// mongoose.connect("mongodb+srv://vedant:<password>@cluster0.nxu1fe4.mongodb.net/notesDB", {
//     useNewUrlParser: true
// })

mongoose.connect('mongodb://localhost/ContactCharity', {
    useNewUrlParser: true
})


// JOINING VIEWS AND STATIC FILES //

app.locals.basedir = path.join(__dirname, 'views');
app.use('/static', express.static('static'))


// GET REQUESTS //
app.set('view engine', 'pug')

app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.status(200).render("index.pug")
})

app.get('/about', (req, res) => {
    res.status(200).render("about.pug")
})

app.get('/contact', (req, res) => {
    res.status(200).render("contact.pug")
})

app.get('/event', (req, res) => {

    res.status(200).render("event.pug")
})

// SAVING THE CONTACT DETAILS //

app.use(bodyparser.urlencoded({
    extended: true
}));

const ContactSchema = new mongoose.Schema({
    First_Name: {
        type: String,
    },
    C_Email: {
        type: String,
    },

    C_Message: {
        type: String,
    }
});

var contact = mongoose.model('contact', ContactSchema);

app.post('/contact', (req, res) => {
    var newCust = new contact(req.body);
    newCust.save().then(() => {
        res.status(200).send("This item has been saved to the DataBase")
    }).catch(() => {
        res.status(400).send("Item has not been saved to DataBase")
    })
})
// SAVING DATA FOR EVENT PAGE//

const EventSchema = new mongoose.Schema({
    E_name: {
        type: String,
    },
    E_Email: {
        type: String,
    },
    E_Website: {
        type: String,
    },
    E_Message: {

        type: String,
    }
});

var event = mongoose.model('event', EventSchema);

app.post('/event', (req, res) => {
    var EventMsg = new event(req.body);
    EventMsg.save().then(() => {
        res.status(200).send("This message hab been saved to the database");
    }).catch(() => {
        res.status(400).send("This message has been saved to the database");
    })
})
// RUNING THE SERVER //

app.listen(port, () => {
    console.log(`This application is listening on port ${port}`);
})