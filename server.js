// const app = require("./api");
// const mongoose = require("mongoose");
// const port = process.env.PORT || 3001;
// mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, err => {
//   if (err) {
//     console.log("not connected to db");
//   } else {
//     console.log("everything is ok!!");
//   }
// });
// app.listen(port, () => {
//   console.log(`listening to port ${port}`);
// });


const express = require("express");
const path = require("path");

const app = require ("./api");
const mongoose = require("mongoose");
require('dotenv').config();

const PORT = process.env.PORT || 3001;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
// app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/3000");
// mongoose.connect(`mongodb://${process.env.DB_NAME}:${process.env.DB_PASS}@ds241658.mlab.com:41658/test_db`,(err)=>{
// if(err) throw err;
// console.log("DB Connected Successfully");
// })

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
