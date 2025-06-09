import '../models/connection.js';
import jwt from 'jsonwebtoken';
import rs from 'randomstring';
import url from 'url';
import sendMail from './email.controller.js';

//to link userschema model
import UserSchemaModel from '../models/user.model.js';

export const save =async(req,res)=>{
  var users= await UserSchemaModel.find();
    //console.log(users);
  var len=users.length;
    //console.log(len);
  var _id = (len==0)?1:users[len-1]._id+1;
   // console.log(_id);
  var userDetail=req.body;
  userDetail={...userDetail,"_id":_id,"role":"user","status":0,"info":Date()};
    // console.log(userDetail);
   try{
    UserSchemaModel.create(userDetail);
    sendMail(users.email,users.password);
    res.status(201).json({"status":true});
   }
   catch(error)
   {
    //console.log(error);
    res.status(500).json({"status":false});
   }
}

export const login=async(req,res)=>{
   var condition_obj ={...req.body,"status":1};
   //console.log(condition_obj);
    var userList = await UserSchemaModel.find(condition_obj);
   //console.log(userList);

   if(userList.length!=0)
    {
        const payload = {"subject":userList[0].email};
        const key =rs.generate();  
        const token = jwt.sign(payload,key);
        res.status(200).json({"token":token,"userList":userList[0]});
    } 
    else
    {
        res.status(500).json({"error":"token error"});
    }
}

export const fetch =async(req,res)=>{
    var condition_obj=url.parse(req.url,true).query;
    //console.log(condition_obj);
     var userList = await UserSchemaModel.find(condition_obj);//find array layega findOne obj layega
     //console.log(userList);
//if(userList.length!=0)array return ayega
//
    if(userList.length!=0)  
    {
      res.status(200).json(userList);
    } 
    else
    {
      res.status(404).json({"msg":"resource not found"});
    }
}

export const update =async(req,res)=>{
  //  var user =await UserSchemaModel.findOne(JSON.parse(req.body.condition_obj));
  //JSON.parse remove kiya h axios request k liye
   var user =await UserSchemaModel.findOne(req.body.condition_obj);
  // console.log(user);
   if(user)
   {
      // var update_user = await UserSchemaModel.updateOne(JSON.parse(req.body.condition_obj),{$set:(JSON.parse(req.body.content_obj))})
      var update_user = await UserSchemaModel.updateOne(req.body.condition_obj,{$set:req.body.content_obj})

      
      //console.log(update_user);
      if(update_user)
      {
        res.status(200).json({"msg":"user updated successfully"});
      }
      else
      {
        res.status(500).json({"msg":"user not updated successfully"});
      }
   }
   else
   {
     res.status(404).json({"msg":"resource not found"});
   } 
}

export const deleteUser =async(req,res)=>{
  //dono line m se json.parse remove kiya h
  // var user =await UserSchemaModel.findOne(JSON.parse(req.body.condition_obj));
  var user =await UserSchemaModel.findOne(req.body);
  //console.log(user);
  if(user)
  {
    //  var delete_user = await UserSchemaModel.deleteOne(JSON.parse(req.body.condition_obj));
     var delete_user = await UserSchemaModel.deleteOne(req.body);
     
     //console.log(update_user);
     if(delete_user)
     {
       res.status(200).json({"msg":"user deleted successfully"});
     }
     else
     {
       res.status(500).json({"msg":"user not deleted successfully"});
     }
  }
  else
  {
    res.status(404).json({"msg":"resource not found"});
  }
}