import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './api/books.js';
import cors from 'cors';



const app = express();

//Configuring Environment Variables
dotenv.config();

//Accepting URL Encoded Request Body
app.use(express.urlencoded())

//MiddleWare For Handling CORS policy
//Option1: Allow All origins with default of cors(*)
app.use(cors());
//Option2: Allow Custom Origins
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders:['Content-Type']
// }))

//Middleware for routing requests on Books
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



