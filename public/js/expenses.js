const submit = document.getElementById('submit')
const workingTotal = document.getElementById("total");

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
    fetch(`/expenses?date=${date}&month=${month}&day=${day}&expense=${expense}&total=${total}`, {
        method: 'POST'
    })
    workingTotal.textContent = "Saved!";
    setTimeout(function(){
        workingTotal.textContent = "Total";
    }, 2500);
});

const expense1 = document.querySelector("#expense1");
const expense2 = document.querySelector("#expense2");
const expense3 = document.querySelector("#expense3");
const expense4 = document.querySelector("#expense4");


const displayTotal = () =>{
    return(Number(expense1.value) + Number(expense2.value) + Number(expense3.value) + Number(expense4.value));
}

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