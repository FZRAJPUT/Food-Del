import mongoose from "mongoose";

const dealsSchema = new mongoose.Schema({
    name: {type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true}
})

const dealsModel = mongoose.models.deals || mongoose.model("deals",dealsSchema);

export default dealsModel;