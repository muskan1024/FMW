import mongoose from "mongoose";


const connectDB = async () =>{
    try{
        const MONGODB_URI = "mongodb+srv://shaikhmuskan1024:muskan@cluster0.lpvvshc.mongodb.net/FC"
        await mongoose.connect(MONGODB_URI,{
            useNewUrlParser : true,
            useUnifiedTopology : true,
        });
        console.log("Connected");

    // Perform MongoDB operations as needed here...

    MONGODB_URI.close();
    res.status(200).json({ message: 'Connected successfully to MongoDB server' });
    }
    catch(error){
        console.error("Failed to connect!", error)
        return;
    }
};

export default connectDB



// import { MongoClient } from "mongodb";

// // Connection URL
// const url = 'mongodb://localhost:27017';

// // Database Name
// const dbName = 'FC'; // Replace 'your_database_name' with your desired database name

// // Create a global variable to store the database connection
// let cachedDb = null;

// export async function connectToDatabase() {
//   if (cachedDb) {
//     return cachedDb;
//   }

//   try {
//     const client = await MongoClient.connect(url);
//     const db = client.db(dbName);
//     cachedDb = db;
//     return db;
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//     throw error;
//   }
// }
