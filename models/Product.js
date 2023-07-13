import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    ProductName:{
        type : String ,
        required : true,
    },
    Image:{
        type : String ,
        required : true,
    },
    Price:{
        type : String ,
        required : true,
    },
    description:{
        type : String ,
        required : true,
    },
})

export default mongoose.models.Post || mongoose.model('Post', postSchema)