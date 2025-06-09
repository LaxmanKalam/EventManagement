import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';

import Razorpay from 'razorpay';

const app=express();

//to link route level middileware on app.js
import userRouter from './routes/user.router.js';
import categoryRouter from './routes/category.router.js';
import hotelcategoryrouter from './routes/hotelcategory.router.js'


app.use(cors());

//to read binary content
app.use(fileUpload());

//to load configuration body parserc
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//application level middleware 
app.use("/user",userRouter);
app.use("/category",categoryRouter);
app.use("/hotel", hotelcategoryrouter)


app.listen(3001);
console.log("Server invoked at link :http://localhost:3001");
//fetch m query using ? 
// 

/*
router path and method
*/
 