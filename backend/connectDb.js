const mongoose = require("mongoose");
require("dotenv").config();

const connectToDb = async () => {
    try{
        const connect = await mongoose.connect(process.env.DB_CONNECTION_STRING);
        console.log("Database Connected");
    } catch(error) {
        console.error("Database not connected")
    }
};

module.exports = connectToDb;