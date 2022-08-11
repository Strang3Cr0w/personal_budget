//For Loop to reate rows
for(let x = 1; x < 32; x++){
    let newElement = document.createElement("tr")
    newElement.setAttribute("id", `row${x}`)

    let currentElement = document.getElementById(`row${x - 1}`)
    let parent = currentElement.parentNode
    parent.insertBefore(newElement, currentElement.nextSibling);
}
//For loop to create Data Tables
//Balance Total
for(let x = 1; x < 32; x++){
    let newElement = document.createElement("td");
    newElement.setAttribute("id", `balance_total${x}`);

    let currentElement = document.getElementById(`row${x}`);
    let parent = currentElement.parentNode;
    parent.insertBefore(newElement, currentElement.nextSibling);
}
//Income Data Table
for(let x = 1; x < 32; x++){
    let newElement = document.createElement("td");
    newElement.setAttribute("id", `income${x}`);

    let currentElement = document.getElementById(`row${x}`);
    let parent = currentElement.parentNode;
    parent.insertBefore(newElement, currentElement.nextSibling);
}
//Discretionary Data Table
for(let x = 1; x < 32; x++){
    let newElement = document.createElement("td");
    newElement.setAttribute("id", `discretionary${x}`);

    let currentElement = document.getElementById(`row${x}`);
    let parent = currentElement.parentNode;
    parent.insertBefore(newElement, currentElement.nextSibling);
}
//Vehicle&Gas Data Table
for(let x = 1; x < 32; x++){
    let newElement = document.createElement("td");
    newElement.setAttribute("id", `vehicle_gas${x}`);

    let currentElement = document.getElementById(`row${x}`);
    let parent = currentElement.parentNode;
    parent.insertBefore(newElement, currentElement.nextSibling);
}
//Food&Groceries Data Table
for(let x = 1; x < 32; x++){
    let newElement = document.createElement("td");
    newElement.setAttribute("id", `food_groceries${x}`);

    let currentElement = document.getElementById(`row${x}`);
    let parent = currentElement.parentNode;
    parent.insertBefore(newElement, currentElement.nextSibling);
}
//Utilities Data Table
for(let x = 1; x < 32; x++){
    let newElement = document.createElement("td");
    newElement.setAttribute("id", `utilities${x}`);

    let currentElement = document.getElementById(`row${x}`);
    let parent = currentElement.parentNode;
    parent.insertBefore(newElement, currentElement.nextSibling);
}
//Mortgage/Rent Data Table
for(let x = 1; x < 32; x++){
    let newElement = document.createElement("td");
    newElement.setAttribute("id", `mortgage_rent${x}`);

    let currentElement = document.getElementById(`row${x}`);
    let parent = currentElement.parentNode;
    parent.insertBefore(newElement, currentElement.nextSibling);
}
//Day Data Table
for(let x = 1; x < 32; x++){
    let newElement = document.createElement("td");
    newElement.setAttribute("id", `day${x}`);
    let newContent = document.createTextNode(`Day ${x}`);
    newElement.appendChild(newContent);

    let currentElement = document.getElementById(`row${x}`);
    let parent = currentElement.parentNode;
    parent.insertBefore(newElement, currentElement.nextSibling);
}
//Mortgage/Rent Form
for(let x = 1; x < 32; x++){
    let newElement = document.createElement("form");
    newElement.setAttribute("id", `mortgage_form${x}`);

    let currentElement = document.getElementById(`mortgage_rent${x}`);
    currentElement.appendChild(newElement);
}

for(let x = 1; x < 32; x++){
    let newElement = document.createElement("label");
    newElement.setAttribute("for", `mortgage_rent_input${x}`);
    let newContent = document.createTextNode("$");
    newElement.appendChild(newContent);

    let currentElement = document.getElementById(`mortgage_form${x}`);
    currentElement.appendChild(newElement);
}

for(let x = 1; x < 32; x++){
    let newElement = document.createElement("input");
    newElement.type = "number";
    newElement.setAttribute("id", `mortgage_rent_input${x}`);
    
    let currentElement = document.getElementById(`mortgage_form${x}`);
    currentElement.appendChild(newElement)
}
//End of Mortgage/Rent Form

//Utilities Form
for(let x = 1; x < 32; x++){
    let newElement = document.createElement("form");
    newElement.setAttribute("id", `utilities_form${x}`);

    let currentElement = document.getElementById(`utilities${x}`);
    currentElement.appendChild(newElement);
}

for(let x = 1; x < 32; x++){
    let newElement = document.createElement("label");
    newElement.setAttribute("for", `utilities_input${x}`);
    let newContent = document.createTextNode("$");
    newElement.appendChild(newContent);

    let currentElement = document.getElementById(`utilities_form${x}`);
    currentElement.appendChild(newElement);
}

for(let x = 1; x < 32; x++){
    let newElement = document.createElement("input");
    newElement.type = "number";
    newElement.setAttribute("id", `utilities_input${x}`);
    
    let currentElement = document.getElementById(`utilities_form${x}`);
    currentElement.appendChild(newElement)
}
//End of utilities Form

//Food&Groceries Form
for(let x = 1; x < 32; x++){
    let newElement = document.createElement("form");
    newElement.setAttribute("id", `food_groceries_form${x}`);

    let currentElement = document.getElementById(`food_groceries${x}`);
    currentElement.appendChild(newElement);
}

for(let x = 1; x < 32; x++){
    let newElement = document.createElement("label");
    newElement.setAttribute("for", `food_groceries_input${x}`);
    let newContent = document.createTextNode("$");
    newElement.appendChild(newContent);

    let currentElement = document.getElementById(`food_groceries_form${x}`);
    currentElement.appendChild(newElement);
}

for(let x = 1; x < 32; x++){
    let newElement = document.createElement("input");
    newElement.type = "number";
    newElement.setAttribute("id", `food_groceries_input${x}`);
    
    let currentElement = document.getElementById(`food_groceries_form${x}`);
    currentElement.appendChild(newElement)
}
//End of Food&Groceries Form

//Vehicle&Gas Form
for(let x = 1; x < 32; x++){
    let newElement = document.createElement("form");
    newElement.setAttribute("id", `vehicle_gas_form${x}`);

    let currentElement = document.getElementById(`vehicle_gas${x}`);
    currentElement.appendChild(newElement);
}

for(let x = 1; x < 32; x++){
    let newElement = document.createElement("label");
    newElement.setAttribute("for", `vehicle_gas_input${x}`);
    let newContent = document.createTextNode("$");
    newElement.appendChild(newContent);

    let currentElement = document.getElementById(`vehicle_gas_form${x}`);
    currentElement.appendChild(newElement);
}

for(let x = 1; x < 32; x++){
    let newElement = document.createElement("input");
    newElement.type = "number";
    newElement.setAttribute("id", `vehicle_gas_input${x}`);
    
    let currentElement = document.getElementById(`vehicle_gas_form${x}`);
    currentElement.appendChild(newElement)
}
//End of Vehicle&Gas Form

//Discretionary Form
for(let x = 1; x < 32; x++){
    let newElement = document.createElement("form");
    newElement.setAttribute("id", `discretionary_form${x}`);

    let currentElement = document.getElementById(`discretionary${x}`);
    currentElement.appendChild(newElement);
}

for(let x = 1; x < 32; x++){
    let newElement = document.createElement("label");
    newElement.setAttribute("for", `discretionary_input${x}`);
    let newContent = document.createTextNode("$");
    newElement.appendChild(newContent);

    let currentElement = document.getElementById(`discretionary_form${x}`);
    currentElement.appendChild(newElement);
}

for(let x = 1; x < 32; x++){
    let newElement = document.createElement("input");
    newElement.type = "number";
    newElement.setAttribute("id", `discretionary_input${x}`);
    
    let currentElement = document.getElementById(`discretionary_form${x}`);
    currentElement.appendChild(newElement)
}
//End of Discretionary Form

//Income Form
for(let x = 1; x < 32; x++){
    let newElement = document.createElement("form");
    newElement.setAttribute("id", `income_form${x}`);

    let currentElement = document.getElementById(`income${x}`);
    currentElement.appendChild(newElement);
}

for(let x = 1; x < 32; x++){
    let newElement = document.createElement("label");
    newElement.setAttribute("for", `income_input${x}`);
    let newContent = document.createTextNode("$");
    newElement.appendChild(newContent);

    let currentElement = document.getElementById(`income_form${x}`);
    currentElement.appendChild(newElement);
}

for(let x = 1; x < 32; x++){
    let newElement = document.createElement("input");
    newElement.type = "number";
    newElement.setAttribute("id", `income_input${x}`);
    
    let currentElement = document.getElementById(`income_form${x}`);
    currentElement.appendChild(newElement)
}
//End of Income Form

//Balance Form
for(let x = 1; x < 32; x++){
    let newElement = document.createElement("form");
    newElement.setAttribute("id", `balance_total_form${x}`);

    let currentElement = document.getElementById(`balance_total${x}`);
    currentElement.appendChild(newElement);
}

for(let x = 1; x < 32; x++){
    let newElement = document.createElement("label");
    newElement.setAttribute("for", `balance_total_input${x}`);
    let newContent = document.createTextNode("$");
    newElement.appendChild(newContent);

    let currentElement = document.getElementById(`balance_total_form${x}`);
    currentElement.appendChild(newElement);
}

for(let x = 1; x < 32; x++){
    let newElement = document.createElement("input");
    newElement.type = "number";
    newElement.setAttribute("id", `balance_total_input${x}`);
    
    let currentElement = document.getElementById(`balance_total_form${x}`);
    currentElement.appendChild(newElement)
}
//End of Balance Form
