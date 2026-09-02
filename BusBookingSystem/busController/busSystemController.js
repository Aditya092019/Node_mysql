
const busdb = require('../bus-utils/busdb-connection');



const addUserEntries = (req,res)=>{
    const {email, name} = req.body;
    const insertQuery = 'insert into Users (email,name) values (?,?)';

    busdb.execute(insertQuery,[email,name], (err)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            connection.end();
            return;
        }

        console.log("User value has been inserted");
        res.status(200).send(`Users with name ${name} successfully added`);
    })
}


const fetchUserEntries = (req,res)=>{
    const selectQuery = 'select * from Users';

    busdb.execute(selectQuery, (err,result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            connection.end();
            return;
        }

        console.log("User has been fetched");
        res.status(200).json(result);
    })
}


const addBusEntries = (req,res)=>{
    const {busNumber, totalSeats, availableSeats} = req.body;
    const insertQuery = 'insert into Bus (busNumber,totalSeats,availableSeats) values (?,?,?)';
    busdb.execute(insertQuery,[busNumber,totalSeats,availableSeats], (err)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            connection.end();
            return;
        }

        console.log("Bus value has been inserted");
        res.status(200).send(`Bus with busnumber ${busNumber} successfully addded`);
    })
}

const fetchBusEntries = (req,res)=>{
    const selectQuery = 'select busNumber from Bus where availableSeats>=10';
    const {seats} = req.params;
    busdb.execute(selectQuery,[seats], (err,result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            connection.end();
            return;
        }

        console.log("Bus has been fetched");
        res.status(200).json(result);
    })
}


module.exports = {
    addUserEntries,
    fetchUserEntries,
    addBusEntries,
    fetchBusEntries
}
