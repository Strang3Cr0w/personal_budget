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
    expenses.push(newExpense);
 
})

module.exports = expensesRouter;