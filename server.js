'use strict';

const express = require('express');

const PORT = 8081;
//const HOST = '0.0.0.0';



//App
const app = express();
app.get('/', (req, res) => {
    res.send('Hey there! Welcome to my first Docker and Kubernetes Assignment. ');
});

app.listen(PORT);
    console.log(`Running on port ${PORT}`);