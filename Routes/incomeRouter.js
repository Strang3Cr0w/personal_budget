const express = require("express");
const incomeRouter = express.Router();
const fs = require("fs");

const incomeJSON = fs.readFileSync("./income.txt", {encoding: "utf-8", flag: "r"});
let income = JSON.parse(incomeJSON);

incomeRouter.get('/', (req,res) => {
    res.send(income)
})

incomeRouter.post('/', (req, res, next) => {
    const newIncome = {
        date: req.query.date,
        month: req.query.month,
        day: req.query.day,
        income: req.query.income
    }  
    console.log(newIncome)
    if (income.length>0){
        for (let i=0; i<income.length; i++){
            console.log(income[i])
            if(income[i].date === newIncome.date) {
                income[i].income = newIncome.income;
            }else{
                console.log("pushing to database")
                income['income'].push(newIncome)
                fs.writeFileSync("income.txt", JSON.stringify(income, null, 4), "utf-8");
            } 

    } } else {
        console.log("pushing to database")
        income['income'].push(newIncome)
        fs.writeFileSync("income.txt", JSON.stringify(income, null, 4), "utf-8");
    }
    
})

incomeRouter.delete("/delete", (req, res, next) =>{
    income = {
        income: []
    };
    fs.writeFileSync("income.txt", JSON.stringify(income, null, 4), "utf-8");
    console.log("Income Delete Operations Complete");
});

module.exports = incomeRouter;