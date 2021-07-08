const express = require("express");
const { ObjectID } = require("mongodb");

const router = new express.Router();

router.post("/submit-form", async (req, res) => {
    const userData = req.body.userData;
    try {
      const insertData = await req.app.database
        .collection("userData")
        .insertOne(userData);
      if (insertData.insertedId) {
        res.status(200).send({ objectId: insertData.insertedId });
      } else {
        res.status(500).send("No ID");
      }
    } catch (err) {
      res.status(500).send(err);
      console.log(err);
    }
  });
  
  router.post("/search", async (req,res) =>{
      const userId = req.body.userId
  
      try{
          const fetchData = await req.app.database.collection("userData").findOne({_id:ObjectID(userId)})
          
          if(fetchData){
              res.status(200).send({fetchData})
          }
          else{
              res.status(500).send("No Data")
          }
      }
      catch(err){
          res.status(500).send(err)
          console.log(err)
      }
  })

  router.get("/display", async (req,res) =>{
    try{
     
      let emp = [];
      let cursor = await req.app.database.collection("userData").find({});
      await cursor.forEach((item) => {
        emp.push(item);
      });
      res.status(200).send({ emp });
    } catch (error) {
      res.status(500).send(error);
    }
  });

  
  module.exports=router