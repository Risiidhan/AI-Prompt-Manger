import mongoose from "mongoose";

let isConnected : boolean = false;  

export const connectToDb = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected)
        return console.log("Connected to DB already");

    try {
        let connectionString : string = process.env.DB_URI ?? '';
        
        await mongoose.connect(connectionString, {
            dbName : "promptopia",
        });
        isConnected=true;
        console.log("Mongo DB is connected");
        
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
        
}
