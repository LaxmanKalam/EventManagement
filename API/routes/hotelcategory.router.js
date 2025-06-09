import express from 'express';

const router=express.Router();

//to link userController on userrouter
import * as hotelcategoryController from '../controller/hotelcategory.controller.js';

router.post("/save",hotelcategoryController.save);
router.get("/fetch",hotelcategoryController.fetch);

export default router;