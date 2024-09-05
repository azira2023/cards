const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const HOSTENAME = "127.0.0.1";
const routes = require("./routes/flashcardRoutes");
const app = express();
const corsOption = {
  Origin: "http://localhost:5173",
};
app.use(express.static(path.join(__dirname, "dist")));
app.use(cors(corsOption));
app.use(express.json());
app.use("/api/", routes);

//const MONGO_URI ="mongodb+srv://aziraabderrazak:rRb8WrRMi3zy0LYh@cluster0.0beo7ey.mongodb.net/";
mongoose.connect(process.env.MONGO_URI, { dbName: "flashcards-app" });
const database = mongoose.connection;
database.once("open", () => {
  console.log("Connected to MongoDB");
});
app.listen(process.env.PORT, HOSTENAME, () => {
  console.log("Listenig to port: " + process.env.PORT);
});
