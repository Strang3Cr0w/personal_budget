const express = require("express");
const router = express.Router();
const fs = require("fs");

const maxMonthlySpendJSON = fs.readFileSync("./maxMonthlySpend.txt", {encoding: "utf-8", flag: "r"});
const maxMonthlySpend = JSON.parse(maxMonthlySpendJSON);

//api data to be found at '/setValues/setMonthlySpend
router.get("/setMonthlySpend", (req,res) => {
    res.send(maxMonthlySpend)
})

// posting data to the DB (url is currently a placeholder - feel free to change it)
// BTW this route is expecting data to come through a HTML form..
// in a nutshell, HTML forms send the data over as something similar to JSON (i think). The "name" HTML attribute is the key and the "value" HTML attribute is the value
router.post("/setMonthlySpend", (req, res, next) => {
    maxMonthlySpend["mortgageRent"] = req.body["mortgageRent"]; // the values inside the square brackets are meant to represent the "name" HTML attribute for each "input"
    maxMonthlySpend["utilities"] = req.body["utilities"]
    maxMonthlySpend["foodGroceries"] = req.body["foodGroceries"]
    maxMonthlySpend["vehicleGas"] = req.body["vehicleGas"]
    maxMonthlySpend["discretionary"] = req.body["discretionary"]
    fs.writeFileSync("maxMonthlySpend.txt", JSON.stringify(maxMonthlySpend, null, 4), "utf-8");
    console.log("Write Operations Done")
    setTimeout(function(){
        res.redirect("/setbudget.html");
    }, 2500);
});

module.exports = router;