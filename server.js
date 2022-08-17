const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set("view engine", "ejs");

const databaseRouter = require("./database.js");
app.use("/setValues", databaseRouter);

app.get("/view/woohoo.ejs", (req, res, next) =>{
    res.render("woohoo");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`LISTENING PORT: ${PORT} OK`)
});
