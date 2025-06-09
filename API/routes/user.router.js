import express from 'express';

const router=express.Router();

//to link userController on userrouter
import * as userController from '../controller/user.controller.js';

router.post("/save",userController.save);
router.post("/login",userController.login);
router.get("/fetch",userController.fetch);
router.patch("/update",userController.update);
router.delete("/delete",userController.deleteUser);
export default router;