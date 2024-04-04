import express from "express";
import { PORT ,mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import { Details } from "./models/detailsModel.js";
import detailsRoute from "./routes/detailsRoute.js";
import cors from 'cors';

const app=express();
//middleware
app.use(express.json());

//middleware for cors
app.use(cors());

app.get('/',(request,response)=>{
    console.log(response);
    return response.status(234).send('welcome to mern stack tutorial');
});

app.use('/details', detailsRoute);

mongoose
.connect(mongoDBURL)
.then(()=>{
    console.log('app is connected to database');
    app.listen(PORT, ()=>{
        console.log(`app is listening to port :${PORT}`)
    });
})
.catch((error)=>{
    console.log(error);
})