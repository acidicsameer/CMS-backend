/* eslint-disable no-undef */

 import mongoose from "mongoose";
 import dotenv from "dotenv"

dotenv.config();  
 const dbConnect =async() => {
    try {
               
               const mongourl=process.env.MONGO
               await mongoose.connect(mongourl)
            console.log("successfully connected database")

    } catch (error) {
          console.log( "error occured while connecting to database ",error)
    } 

    
  }  
  export default dbConnect 
  