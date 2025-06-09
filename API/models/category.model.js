import mongoose from "mongoose";
//import mongooseUniqueValidator from "mongoose-unique-validator";

const categorySchema =mongoose.Schema({
_id:Number,
catnm:{
    type:String,
    require:[true,"cat name is required"],
    trim:true,
    lowercase:true,
},
subcatnm:{
    type:String,
    require:[true,"cat name is required"],
    trim:true,
    // lowercase:true,
},
city:{
    type:String,
    require:[true,"cat name is required"],
    trim:true,
    lowercase:true,
},
price:{
    type:String,
    require:[true,"cat name is required"],
    trim:true,
    lowercase:true,
},
day:{
    type:String,
    require:[true,"cat name is required"],
    trim:true,
    lowercase:true,
},
address:{
    type:String,
    require:[true,"cat name is required"],
    trim:true,
    lowercase:true,
},
eventdesc:{
    type:String,
    require:[true,"cat name is required"],
    trim:true,
    lowercase:true,
},
imgnm:{
    type:String, 
    require:[true,"cat name is required"],
    trim:true,
},
caticonnm:{
    type:[String],
    require:[true,"cat name is required"],
    trim:true,
    lowercase:true,
},
info:String
});

//to apply unique validator
//mongoose.plugin(mongooseUniqueValidator);

//schema validation 
const CategorySchemaModel=mongoose.model('category_collection',categorySchema);

export default CategorySchemaModel;
