const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/Allenhouse25_A_DB";

function dbConnect() {
  mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("connection successfully");
    })
    .catch((err) => {
      console.log("database connection fail", err);
    });
}

module.exports = dbConnect;
