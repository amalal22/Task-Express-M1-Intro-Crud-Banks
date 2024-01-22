const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("connect to DB!");
  } catch (error) {
    console.log("Cann't connect to DB", error);
  }
};
module.exports = connectDB;
