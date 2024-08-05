import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://fz_rajput:fzrajput1234@cluster0.6unk2id.mongodb.net/easy-deals').then(()=>{
        console.log("DB Connected...");
    })
}