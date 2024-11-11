import mongoose from "mongoose";
const MONGODB_URL = process.env.MONGO_URI || 'mongodb://localhost:27017/billboard';

const connectToDatabase = async () => {
    try { 
        await mongoose.connect(MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Could not connect to MongoDB", error);
    }
};

export  default connectToDatabase ;

