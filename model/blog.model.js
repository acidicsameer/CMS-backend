import mongoose from "mongoose";
 import { Schema } from "mongoose";
  const BlogSchema=mongoose.Schema({
     
title:{
     type:String,
     required:true,
     
},
subTitle:{
     type:String,
     required:true,
},

description:{
     type:String,
     required:true,
},
  },{
     timestamps:true,
  }) 
const Blog=mongoose.model("Blog",BlogSchema)
    export default Blog 