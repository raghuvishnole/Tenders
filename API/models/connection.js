import mongoose from "mongoose";
const url =
  "mongodb+srv://raghuvishnole143:<db_password>@cluster0.yb4mwr7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(url);
console.log("Successfully connected to mongodb database...");
