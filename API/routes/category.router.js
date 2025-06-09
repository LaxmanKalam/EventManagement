import express from 'express';

const router=express.Router();

//to link userController on userrouter
import * as categoryController from '../controller/category.controller.js';

router.post("/save",categoryController.save);
router.get("/fetch",categoryController.fetch);
//router.post("/login",categoryController.login);
// router.patch("/update",userController.update);
// router.delete("/delete",userController.deleteUser);
export default router;