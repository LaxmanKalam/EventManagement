import mongoose from "mongoose";

const url="mongodb://localhost:27017/Myvillas";

mongoose.connect(url);

console.log("DataBase Connected succesfully");