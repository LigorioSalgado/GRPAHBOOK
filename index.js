import express from 'express';
import mongoose from 'mongoose';
import SeedAutor from './seeders/autors';

const app = express();

mongoose.connect('mongodb://graphadmin:talent2018@ds233769.mlab.com:33769/graphbook');
const db = mongoose.connection;

db.on('error',() => console.log("Failed to conect to database"))
    .once('open', () => console.log("Connected to the database"))

app.get('/',(req,res) => {
    res.send("Hello World from Graph API");
});

app.listen(3000,() => {
    console.log("The magic starts on 3000 port")
})