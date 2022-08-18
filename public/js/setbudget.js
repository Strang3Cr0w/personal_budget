const currentMaxMonthlySpend = () =>{
    fetch("/budget")
    .then(response =>{
        if(response.ok) return response.json();

        renderError(response);
    })
    .then(response =>{
        const currentMaxMonthlySpend = response.maxMonthlySpend;
        document.getElementById("mortgageRent").setAttribute("value", currentMaxMonthlySpend["mortgageRent"]);
        document.getElementById("utilities").setAttribute("value", currentMaxMonthlySpend["utilities"]);
        document.getElementById("foodGroceries").setAttribute("value", currentMaxMonthlySpend["foodGroceries"]);
        document.getElementById("vehicleGas").setAttribute("value", currentMaxMonthlySpend["vehicleGas"]);
        document.getElementById("discretionary").setAttribute("value", currentMaxMonthlySpend["discretionary"]);
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