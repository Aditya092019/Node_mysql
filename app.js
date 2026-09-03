const express = require('express');
const app = express();
const db = require('./utils/db-connection');
const studentRoutes = require('./routes/studentRouter');
const courseRoutes = require('./routes/courseRouter');

app.get('/', (req,res)=>{
    res.send('Hello world');
})
app.use(express.json());
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);

db.sync({force:true}).then(()=>{
    app.listen(3000,()=>{
        console.log('Server is started');
    })
}).catch((err)=>{
   console.log(err);
})
