const express = require('express');
const app = express();
const busdb = require('./bus-utils/busdb-connection');
const busRouter = require('./busroutes/bussystemRouter');

app.use(express.json());
app.use('/bussystem', busRouter);

app.listen(3000, ()=>{
    console.log('Server is started');
})


