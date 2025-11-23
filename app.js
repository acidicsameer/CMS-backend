/* eslint-disable no-undef */

import express from 'express'
 import dbConnect from './db/dbConnect.js';
  import dotenv from 'dotenv'
  dotenv.config()
  const app=express();   
  const port=process.env.PORT

app.get("/",(req,res)=>{
 res.json({
  
    message:" hello baedhjd " ,
    name:"samir" ,
    yetikai:"sagar" ,
    status:200
 })
})  
app.get("/about",(req,res)=>{ 
  res.json({
     message:"hello",
     status:201,
  })

})
 

app.listen(port,()=>{
  dbConnect();
  console.log(" successfully hosted on port:3000")

 
}) 
