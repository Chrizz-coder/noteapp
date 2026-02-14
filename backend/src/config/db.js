import mongoose from "mongoose"

export const connectDB = async () =>{
  try{
    await mongoose.connect(process.env.MongoDB_URL);
    console.log("MongoDB connected successfully");
  }
  catch(error){
    console.log("Error connecting mongoose",error);
    process.exit(1);
  }
}