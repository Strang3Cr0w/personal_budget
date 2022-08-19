//Creates a variable to manipulate the submit element on the html page
const submit = document.getElementById('submit')
//Creates a variable to maniupate the "Total" text on the html page
const workingTotal = document.getElementById("total");

//This function will grab the values of date, expense, and expenses entered,
//calculate the sum of all expense and store it into total, and parse out
//the data to be sent to the /expenses router
submit.addEventListener('click', () => {
    const numberToMonth = {1:"January", 2:"February", 3:"March", 4:"April", 5:"May", 6:"June", 7:"July", 8:"August", 9:"September", 10:"October", 11:"November", 12:"December"}
    const date = document.getElementById('date').value;
    const d = new Date(date);
    const month = numberToMonth[d.getMonth()+1];
    const day = d.getDate()+1;
    const expense = document.getElementById('expenses').value;
    const expense1 = document.getElementById('expense1').value;
    const expense2 = document.getElementById('expense2').value;
    const expense3 = document.getElementById('expense3').value;
    const expense4 = document.getElementById('expense4').value;
    const total = Number(expense1) + Number(expense2) + Number(expense3) + Number(expense4);
    console.log(date, month, day, expense, total)
//The if/else statement will check if date, expense, and total all have valid values,
//otherwise it will change the corresponding labels red. If the input field have valid
//values, then the fetch is executed and the labels are returned to black
    if(date === '' || expense === 'none' || total === 0){
        document.getElementById("dateLabel").textContent = "Date*";
        document.getElementById("dateLabel").style.color = "red";
        document.getElementById("expenseLabel").textContent = "Expense*";
        document.getElementById("expenseLabel").style.color = "red";
        workingTotal.style.color = "red";
    }else{
        fetch(`/expenses?date=${date}&month=${month}&day=${day}&expense=${expense}&total=${total}`, {
            method: 'POST'
        })
        document.getElementById("dateLabel").textContent = "Date";
        document.getElementById("dateLabel").style.color = "black";
        document.getElementById("expenseLabel").textContent = "Expense";
        document.getElementById("expenseLabel").style.color = "black";
        workingTotal.style.color = "black";
        workingTotal.textContent = "Saved!";
        setTimeout(function(){
            workingTotal.textContent = "Total";
        }, 2500);
    }
});

//Sets up variables for the expense fields so they can be used in the following code
const expense1 = document.getElementById('expense1');
const expense2 = document.getElementById('expense2');
const expense3 = document.getElementById('expense3');
const expense4 = document.getElementById('expense4');

//This function will calculate the total of all expense fields and return the sum
const displayTotal = () =>{
    return(Number(expense1.value) + Number(expense2.value) + Number(expense3.value) + Number(expense4.value));
}

//The following four event listeners will trigger the displayTotal function whenever
//the user inputs a new number in any field. So as the user types in expense, the total
//text will transform and reflect the working sum
expense1.addEventListener("input", () =>{
    workingTotal.textContent = displayTotal();
});

expense2.addEventListener("input", () =>{
    workingTotal.textContent = displayTotal();
});

expense3.addEventListener("input", () =>{
    workingTotal.textContent = displayTotal();
});

expense4.addEventListener("input", () =>{
    workingTotal.textContent = displayTotal();
});