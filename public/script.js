const submitButton = document.getElementById('submit-budget')
 
submitButton.addEventListener('click', ()=> {
    const mortgage_rent = document.getElementById('mortgage_rent').value;
    const utilities = document.getElementById('utilities').value;
    const food_groc = document.getElementById('food_groc').value;
    const vehicle_gas = document.getElementById('vehicle_gas').value;
    const descretionary = document.getElementById('descretionary').value;
    const income = document.getElementById('income').value;
    const startingBalance = document.getElementById('startingBalance').value;
 
    let savings = income - (mortgage_rent+utilities+food_groc+vehicle_gas+descretionary)
 
    fetch('/setMonthlySpend?mortgage_rent=${mortgage_rent}&utilities=${utilities}&food_groc=${food_groc}&vehicle_gas=${vehicle_gas}&descretionary=${descretionary}&income=${income}&startingBalance=${startingBalance}&savings=${savings}', {
        method: 'POST'
    })
    .then(response => response.json())
});
