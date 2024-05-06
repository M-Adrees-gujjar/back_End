const express = require('express');
const cors = require('cors');
const app = express();
const route = require('./src/routes/index.js');
const db_conection = require('./src/models/connection.model.js');
require('dotenv').config();
const PORT = process.env.PORT;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.json());
app.use(route);
app.use(cors());

app.get('/', function (req, res) {
    res.send('API is Working');
})

app.listen(PORT, (error) => {
    if (!error) {
        db_conection();
        console.log(`App is listening on port ${PORT} `);
    } else {
        console.log('Error, server can\'t start', error);
    }
});
