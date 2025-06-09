import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const HotelCategorySchema = mongoose.Schema({
  _id: Number,
  catnm: {
    type: String,
    required: [true,"Category name is required"],
    // lowercase: true,
    trim: true
  },
  subcatnm: {
    type: String,
    required: [true,"Hotel name is required"],
    uppercase: true,
    unique: true,
    trim: true
  },
  city: {
    type: String,
    required: [true,"Address is required"],
    // lowercase: true,
    trim: true
  },
  available: {
    type: String,
    required: [true,"Address is required"],
    // lowercase: true,
    trim: true
  },
  days: {
    type: String,
    required: [true,"Address is required"],
    // lowercase: true,
    trim: true
  },
  price: {
    type: String,
    required: [true,"Address is required"],
    // lowercase: true,
    trim: true
  },
  eventdesc: {
    type: String,
    required: [true,"Address is required"],
    // lowercase: true,
    trim: true
  },
  address: {
    type: String,
    required: [true,"Address is required"],
    // lowercase: true,
    trim: true
  },
  mobile: {
    type: String,
    required: [true,"mobile name is required"],
    trim: true,
    validate: {
      validator: function(v) {
        // Regular expression to validate mobile number
        return /^[6789][0-9]{9}$/.test(v);
      },
      message: props => `${props.value} is not a valid mobile number! It should start with 6, 7, 8, or 9 and be exactly 10 digits.`
    }
  },
  subcaticonnm: {
    type: String,
    required: [true,"Hotel Category icon name is required"],
    trim: true
  },
  
  // rating:
  // {
  //   type:Number,
  //   trim:true,
  //   required: [true,"Hotel Category icon name is required"]
  // },
  // userrating:
  // {
  //   type:Number,
  //   trim:true,
  //   required: [true,"Hotel Category icon name is required"]
  // },
  // totalratings:
  // {
  //   type:Number,
  //   trim:true,
  //   required: [true,"Hotel Category icon name is required"]
  // },
  // facility1:
  // {
  //   type:String,
  //   trim:true,
  //   required: [true,"Hotel Category icon name is required"]
  // },
  // facility2:
  // {
  //   type:String,
  //   trim:true,
  //   required: [true,"Hotel Category icon name is required"]
  // },
  // d1:{
  //   type:String,
  //   trim:true,
  //   required: [true,"Hotel Category icon name is required"]
  // },
  // d2:{
  //   type:String,
  //   trim:true,
  //   required: [true,"Hotel Category icon name is required"]
  // },
  // d3:{
  //   type:String,
  //   trim:true,
  //   required: [true,"Hotel Category icon name is required"]
  // },
  // d4:{
  //   type:String,
  //   trim:true,
  //   required: [true,"Hotel Category icon name is required"]
  // },
  // offer:{
  //   type:String,
  //   trim:true,
  //   // required: [true,"Hotel Category icon name is required"]
  // },
  // discount:{
  //   type:String,
  //   trim:true,
  //   // required: [true,"Hotel Category icon name is required"]
  // },
  // tax:{
  //   type:String,
  //   trim:true,
  //   required: [true,"Hotel Category icon name is required"]
  // },
  // bank:{
  //   type:String,
  //   trim:true,
  //   // required: [true,"Hotel Category icon name is required"]
  // },
});

// Apply the uniqueValidator plugin to UserSchema.
HotelCategorySchema.plugin(uniqueValidator);

// compile schema to model
const HotelCategorySchemaModel = mongoose.model('hotelcategory_collection',HotelCategorySchema);

export default HotelCategorySchemaModel