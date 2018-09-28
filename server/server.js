require('../config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app
    .get('/usuario', (req, res) => {
        res.json('get Usuario');
    })
    .post('/usuario', (req, res) => {
        const body = req.body;
        res.json({
            body
        })
    })
    .put('/usuario/:id', (req, res) => {
        let id = req.params.id;
        res.json({
            id
        })
    })
    .delete('/usuario', (req, res) => {
        res.json('delete usuario')
    })
    .listen(process.env.PORT, () => console.log(`Servidor corriendo en localhost:${ process.env.PORT }`))
