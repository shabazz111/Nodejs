const mongoose = require("mongoose");

const URL  = "mongodb+srv://shabazzshaik5:0abG4go7YNPHVymH@cluster0.oqrfiq5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const DBPASSS = "0abG4go7YNPHVymH"


exports.connectDB = () => {
  mongoose
    .connect(URL)
    .then(() => {
      console.log("DB connected ---");
    })
    .catch((err) => {
      console.log(err?.message, ": Error while connecting to DB");
    });
};
