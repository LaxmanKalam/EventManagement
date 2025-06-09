import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const userSchema =mongoose.Schema({
_id:Number,
name:{
    type:String,
    require:[true,"Name is required"],
    trim:true,
    lowercase:true,
},
email:{
    type:String,
    require:[true,"Email is required"],
    unique :true,
    trim:true,
    lowercase:true,
},
password:{
    type:String,
    require:[true,"password is required"],
    trim:true,
    maxlength:10,
    minlength:5,
},
// address:{
//     type:String,
//     require:[true,"Address is required"],
//     trim:true,
// },
mobile:{
    type:String,
    require:[true,"mobile is required"],
    trim:true,
},
// city:{
//     type:String,
//     require:[true,"City is required"],
// },
gender:{
    type:String,
    require:[true,"gender is required"],
},
role:String,
status:Number,
info:String,
});

//to apply unique validator
mongoose.plugin(mongooseUniqueValidator);

//schema validation 
const UserSchemaModel=mongoose.model('villa_collection',userSchema);

export default UserSchemaModel;
