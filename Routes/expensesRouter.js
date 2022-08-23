const express = require("express");
const expensesRouter = express.Router();
const fs = require("fs");

const expensesJSON = fs.readFileSync("./expenses.txt", {encoding: "utf-8", flag: "r"});
let expenses = JSON.parse(expensesJSON);

expensesRouter.get('/', (req,res) => {
    res.send(expenses)
})

expensesRouter.post('/', (req, res) => {
    const newExpense = {
        date: req.query.date,
        month: req.query.month,
        day: req.query.day,
        expense: req.query.expense,
        total: req.query.total
    };
    console.log(newExpense)
    if (expenses.length>0){
        for (let i=0; i<expenses.length; i++){
            console.log(expenses[i])
            if(expenses[i].date === newExpense.date && expenses[i].expense === newExpense.expense) {
                expenses[i].total = newExpense.total;
            } 
    } } 
        console.log("pushing to database")
        expenses['expenses'].push(newExpense)
        fs.writeFileSync("expenses.txt", JSON.stringify(expenses, null, 4), "utf-8");
    
    console.log(expenses)
})

expensesRouter.delete("/delete", (req, res, next) =>{
    expenses = {
        expenses: []
    };

    fs.writeFileSync("expenses.txt", JSON.stringify(expenses, null, 4), "utf-8");
    console.log("Expenses Delete Operations Complete");
});
    
module.exports = expensesRouter;