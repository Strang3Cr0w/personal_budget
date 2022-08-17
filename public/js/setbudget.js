const currentMaxMonthlySpend = () =>{
    fetch("/budget")
    .then(response =>{
        if(response.ok) return response.json();

        renderError(response);
    })
    .then(response =>{
        const currentMaxMonthlySpend = response.maxMonthlySpend;
        document.getElementById("mortgageRent").setAttribute("placeholder", currentMaxMonthlySpend["mortgageRent"]);
        document.getElementById("utilities").setAttribute("placeholder", currentMaxMonthlySpend["utilities"]);
        document.getElementById("foodGroceries").setAttribute("placeholder", currentMaxMonthlySpend["foodGroceries"]);
        document.getElementById("vehicleGas").setAttribute("placeholder", currentMaxMonthlySpend["vehicleGas"]);
        document.getElementById("discretionary").setAttribute("placeholder", currentMaxMonthlySpend["discretionary"]);
    })
}

currentMaxMonthlySpend();

const saved = document.getElementById("saved");
const submit = document.getElementById("submit");

submit.addEventListener("click", () =>{
    saved.innerHTML = "Saved!";
    setTimeout(function(){
        saved.innerHTML = "";
    }, 2500);
})