const express = require("express");
const expensesRouter = express.Router();

const expenses = [];

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
    } } else{
        expenses.push(newExpense)
    }
    console.log(expenses)
    })
    
 


module.exports = expensesRouter;