const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require('./routes/product.route.js')
const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));




//routes
app.use("/api/products",productRoute)

 
app.get("/", (req, res) => {
  res.send("Hello from node API Server updated");
});


mongoose
  .connect(
    "mongodb+srv://Max02well:NbaDFL2LFAEu87QV@crud.lebmvgg.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Crud"
  )
  .then(() => {
    console.log("Connected to the database");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
