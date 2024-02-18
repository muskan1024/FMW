import Products from "@/models/Products";
import connectDB from "@/utils/DB";

connectDB();

export default async function handler(req, res){
    
    try{
        const{BName, PName, Image, Price, Description} = req.body;
        const products = new Products({
            BName,
            PName,
            Image,
            Price,
            Description,
        });

        await products.save();
        res.status(200).json({ success: true, data: products });
    } catch(error){
        res.status(400).json({ success: false, message: error.message});
    }
}