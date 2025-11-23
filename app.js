/* eslint-disable no-undef */

import express from "express";
import dbConnect from "./db/dbConnect.js";
import dotenv from "dotenv";
import Blog from "./model/blog.model.js";

dotenv.config();
const app = express();
const port = process.env.PORT;
 app.use(express.json()) 
 app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
  res.json({
    message: " hello baedhjd ",
    name: "samir",
    yetikai: "sagar",
    status: 200,
  });
});


//create blog api

app.post("/addBlog", async(req,res) => { 

  try {
     
      const data=await Blog.create({ 
      title:req.body.title,
      subTitle:req.body.subTitle, 
      description:req.body.description,
    })  

    res.json({
       "message":"successfully added data to the database", 
       data:data

    })

  } catch (error) {
    console.log("error occured while adding data to database ",error)
  } 

});

app.listen(port, () => {
  dbConnect();
  console.log(" successfully hosted on port:3000");
});
