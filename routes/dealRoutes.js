import express from 'express';
import { addDeals, listFood, removeFood } from '../controllers/dealsController.js';
import multer from 'multer';


const dealRouter = express.Router();

// image storage Engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

dealRouter.post('/add',upload.single("image"),addDeals)
dealRouter.get("/list",listFood);
dealRouter.post("/remove",removeFood)


export default dealRouter