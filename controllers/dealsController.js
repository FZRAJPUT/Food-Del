import { deleteModel } from "mongoose";
import dealsModel from "../models/dealsModels.js";
import fs from 'fs';
import path from 'path';
import dealRouter from "../routes/dealRoutes.js";

// add deals items
const addDeals = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const deal = new dealsModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    });

    try {
        await deal.save();
        res.json({ success: true, message: "Item Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

// all food list
const listFood = async (req, res) => {
    try {
        const deals = await dealsModel.find({});
        res.json({ success: true, data: deals });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

// remove food items
const removeFood = async (req, res) => {
    try {
        const food = await dealsModel.findById(req.body.id);
        const imagePath = path.join('uploads', food.image);
        
        fs.unlink(imagePath, async (err) => {
            if (err) {
                console.log(err);
                res.json({ success: false, message: "Error deleting image" });
                return;
            }

            await dealsModel.findByIdAndDelete(req.body.id);
            res.json({ success: true, message: "Food Removed" });
        });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

export { addDeals, listFood, removeFood };
