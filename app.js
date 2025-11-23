/* eslint-disable no-undef */

import express from "express";
import dbConnect from "./db/dbConnect.js";
import dotenv from "dotenv";
import Blog from "./model/blog.model.js";

dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.json({
//     message: " hello baedhjd ",
//     name: "samir",
//     yetikai: "sagar",
//     status: 200,
//   });
// });

//create blog api
 
app.post("/blog", async (req, res) => {
  const {title,subTitle,description}=req.body

  try {
    const data = await Blog.create({
      title,
      subTitle,
      description,
    });

    res.json({
      message: "successfully added data to the database",
      data: data,
    });
  } catch (error) {
    console.log("error occured while adding data to database ", error);
  }
});

// get all blogs
app.get("/blog", async(req,res) => { 
  const data =await Blog.find()
   
  res.json({
    message:" successfully  get all blogs ",
    data:data,
    
  });
});

 // get single  blog 

 app.get("/blog/:id", async(req,res)=>{  
   
 const id =req.params.id

  const data = await  Blog.findById(id)  
   if(data)
   {
    res.json({
     "message":" error occured while getting a single data " ,
    
  })
   }

 else {

  res.json({
     "message":" get a single blog successfully" ,
     data:data,
  })
}
 })


app.listen(port, () => {
  dbConnect();
  console.log(" successfully hosted on port:3000");
});
