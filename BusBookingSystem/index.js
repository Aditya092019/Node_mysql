const express = require('express');
const mysql = require('mysql2');
const app = express();

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"busbooking"
})


connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }

    console.log("Connection has been created");
    const userQuery =`create table Users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
    )`

    const busQuery = `create table Bus(
    id INT AUTO_INCREMENT PRIMARY KEY,
    busNumber VARCHAR(255),
    totalSeats INT,
    availableSeats INT
    )`

    const bookingQuery = `create table Booking(
    id INT AUTO_INCREMENT PRIMARY KEY,
    seatNumber VARCHAR(255)
    )`

    const paymentQuery = `Create table Payment(
    id INT AUTO_INCREMENT PRIMARY KEY,
    ammountPaid INT,
    paymentStatus VARCHAR(255)
    )`

    connection.execute(userQuery, (err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }

        console.log("User Table is created")
    })

    connection.execute(busQuery, (err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }

        console.log("Bus Table is created");
    })

    connection.execute(bookingQuery, (err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }
        console.log("Booking Table is created");
    })

    connection.execute(paymentQuery, (err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }
        console.log("Payment Table is created");
    })

});


app.get('/', (req,res)=>{
    res.send('Hello world');
})

app.listen(3000, ()=>{
    console.log('Server is started');
})


