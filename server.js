const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set("view engine", "ejs");

const expensesRouter = require("./Routes/expensesRouter.js");
app.use("/expenses", expensesRouter);

const databaseRouter = require("./Routes/budgetRouter.js");
app.use("/budget", databaseRouter);

const incomeRouter = require("./Routes/incomeRouter.js")
app.use("/income", incomeRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`LISTENING PORT: ${PORT} OK`)
});
