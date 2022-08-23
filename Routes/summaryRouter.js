const express = require("express");
const summaryRouter = express.Router();
const fs = require("fs");

const accountBalanceJSON = fs.readFileSync("./accountBalance.txt", {encoding: "utf-8", flag: "r"});
let accountBalance = JSON.parse(accountBalanceJSON);

summaryRouter.post("/", (req, res, next) =>{
    const setAccountBalance = {
        accountBalance: req.query.accountBalance
    };
    accountBalance = setAccountBalance;
    console.log(accountBalance);
    fs.writeFileSync("accountBalance.txt", JSON.stringify(accountBalance, null, 4), "utf-8");
});

summaryRouter.delete("/delete", (req, res, next) =>{
    accountBalance = {
        accountBalance: 0
    };
    fs.writeFileSync("accountBalance.txt", JSON.stringify(accountBalance, null, 4), "utf-8");
    console.log("Account Balance Delete Operations Complete")
});

module.exports = summaryRouter;