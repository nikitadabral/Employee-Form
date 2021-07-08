const express = require("express");
const cors = require("cors");
const connectDB = require("./connections");
const userRouter= require('./routes/user');

const app = express();
const port = 5000;
let database;

connectDB()
  .then((db) => {
    if (db) {
      app.database = db;
    }
  })
  .catch((err) => {
    console.error(err);
  });

app.use(cors());
app.use(express.json());
app.use(userRouter);

 
app.use((req, res) => {
  return res.status(404).send("Invalid Route");
});

app.listen(port, () => {
  console.log("server is running");
});
