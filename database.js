const express = require("express");
const router = express.Router();

const maxMonthlySpend = {
    "Mortgage/Rent": null,
    "Utilities": null,
    "Food&Groceries": null,
    "Vehicle&Gas": null,
    "Descretionary": null,
    "Income": null,
    "Savings": null
};

// posting data to the DB (url is currently a placeholder - feel free to change it)
// BTW this route is expecting data to come through a HTML form..
// in a nutshell, HTML forms send the data over as something similar to JSON (i think). The "name" HTML attribute is the key and the "value" HTML attribute is the value
router.post("/setMonthlySpend", (req, res, next) => {
    maxMonthlySpend["Mortgage/Rent"] = req.body["mortgage_rent"]; // the values inside the square brackets are meant to represent the "name" HTML attribute for each "input"
    maxMonthlySpend["Utilities"] = req.body["utilities"]
    maxMonthlySpend["Food&Groceries"] = req.body["food_groc"]
    maxMonthlySpend["Vehicle&Gas"] = req.body["vehicle_gas"]
    maxMonthlySpend["Descretionary"] = req.body["descretionary"]
    maxMonthlySpend["Income"] = req.body["income"]
    maxMonthlySpend["Savings"] = req.body["savings"]
    console.log(maxMonthlySpend);
    setTimeout(function(){
        res.redirect("/setbudget.html");
    }, 2500);
    
}
)


module.exports = router;
