//Creates a variable to manipulate the submit element on the html page
const submit = document.getElementById('submit');

//This function will grab the values of date and income and parse out
//the data to be sent to the /income router
submit.addEventListener("click", () => {
    const numberToMonth = {1:"January", 2:"February", 3:"March", 4:"April", 5:"May", 6:"June", 7:"July", 8:"August", 9:"September", 10:"October", 11:"November", 12:"December"};
    const date = document.getElementById('date').value;
    const d = new Date(date);
    const month = numberToMonth[d.getMonth()+1];
    const day = d.getDate()+1;
    const income = document.getElementById('income').value;
//This if/else function checks if there's a valid input
    if(date === '' || income === '0'){
        document.getElementById("dateLabel").textContent = "Date*";
        document.getElementById("dateLabel").style.color = "red";
        document.getElementById("incomeLabel").textContent = "Enter Income $*";
        document.getElementById("incomeLabel").style.color = "red";
    }else{
        fetch(`/income?date=${date}&month=${month}&day=${day}&income=${income}`, {
            method: 'POST'
        });
        document.getElementById("dateLabel").textContent = "Date";
        document.getElementById("dateLabel").style.color = "black";
        document.getElementById("incomeLabel").textContent = "Enter Income $";
        document.getElementById("incomeLabel").style.color = "black";
        document.getElementById("saved").innerHTML = "Saved!";
        setTimeout(function(){
        saved.innerHTML = "";
        }, 2500);
    }
})