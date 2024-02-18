import Products from "@/models/Products";
import connectDB from "@/utils/DB";

connectDB();

export default async function handler(req, res) {
    if(req.method === 'GET'){
        try{
            const products = await Products.find().sort({ date: -1 });
            res.status(200).json({ success: true, data: products });
        } catch(error){
            res.status(400).json({success:false});
        }
    }
    else{
        res.status(404).json({message:'Ooopss.....!'})
    }
}



// import { connectToDatabase } from '@/utils/DB.js';

// export default async function handler(req, res) {
//   try {
//     const db = await connectToDatabase();

//     // Access a specific collection in the database
//     const collection = db.collection('collections'); // Replace 'your_collection_name' with your desired collection name

//     // Perform operations on the collection, e.g., find data
//     const data = await collection.find({}).toArray();

//     res.status(200).json(data);
//   } catch (error) {
//     console.error('Error accessing MongoDB:', error);
//     res.status(500).json({ error: 'Failed to access MongoDB' });
//   }
// }
