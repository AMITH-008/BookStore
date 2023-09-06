import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './api/books.js';



const app = express();
dotenv.config();

app.use(express.urlencoded())
app.use("/books", router);


const port = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL)
        .then(() => {
            console.log("Connected To Database");
            app.listen(port, () => console.log(`Server Up And Listening on Port ${port}`));
        })
        .catch((error) => {
            console.log("Error-> "+ error);
        });



