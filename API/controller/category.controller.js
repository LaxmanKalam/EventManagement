import '../models/connection.js';
import jwt from 'jsonwebtoken';
import rs from 'randomstring';
import url from 'url';
import path from 'path';

import CategorySchemaModel from '../models/category.model.js';

export const save = async (req, res) => {
    var cList = await CategorySchemaModel.find();
    //console.log(cList);
    var len = cList.length;
    //console.log(len);
    var _id=len == 0 ? 1 : cList[len - 1]._id + 1;
    var caticon = req.files.caticon;
    var caticonnm = rs.generate() + "-" + Date.now() + "-" + caticon.name;
    var cDetails = { ...req.body, "caticonnm": caticonnm, "_id": _id };
    // console.log(cDetails);
    try {
        await CategorySchemaModel.create(cDetails);
        var __dirname = url.fileURLToPath(new URL('.', import.meta.url));
        var uploadpath = path.join(__dirname, "../../UI/public/assets/uploads/caticons", caticonnm);
        caticon.mv(uploadpath);
        res.status(201).json({ "status": true });
    }
    catch (error) {
        //console.log(error);
        res.status(500).json({ "status": false });
    }
    
}

export var fetch = async (req, res) => {
    var condition_obj = url.parse(req.url, true).query;
    //console.log(condition_obj);
    var cList = await CategorySchemaModel.find(condition_obj);//find array layega findOne obj layega
    //console.log(userList);
    //if(userList.length!=0)array return ayega
    //
    if (cList.length != 0) {
        res.status(200).json(cList);
    }
    else {
        res.status(404).json({ "msg": "resource not found" });
    }
}
