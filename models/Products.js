import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    BName:{
        type : String,
        required: true,
    },
    PName:{
        type : String,
        required: true,
    }, 
    Image:{
        type : String,
        required: true,
    },
    Price:{
        type: String,
        reqiured : true,
    },
    Description:{
        type: String,
        required: true,
    },
})

export default mongoose.models.Products || mongoose.model('Products', productSchema)