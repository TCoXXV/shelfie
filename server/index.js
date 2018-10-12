const express = require('express');
const bP = require('body-parser');
const controller = require('./controller.js');
const massive = require('massive');
require('dotenv').config();

massive( process.env.CONNECTION_STRING ).then(db => {
    app.set('db', db)
}).catch(error => {
    console.log('Error on massive', error)
})

const app = express();
app.use(bP.json());

const port = 4000;
app.listen(port,()=>{
    console.log(`Server in port ${port} ⛵️`)
})