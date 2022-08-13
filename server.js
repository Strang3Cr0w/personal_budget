const express = require("express");
const app = express();
const databaseRouter = require("./database.js")

app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.set("view engine", "ejs") 

app.use("/setValues", databaseRouter)

app.get("/public/woohoo.html", (req,res)=>{
res.render("woohoo.ejs")
})

app.listen(3000, ()=>{
    console.log("LISTENING: OK")
})