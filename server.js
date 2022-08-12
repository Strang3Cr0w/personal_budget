const express = require("express");
const app = express();
const databaseRouter = require("./database.js")

app.use("/setValues", databaseRouter)