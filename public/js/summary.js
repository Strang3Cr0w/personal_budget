//////////////////////////////////////
//                                  //
//  Code To Generate Summary Table  //
//                                  //
//////////////////////////////////////
//For Loop to create rows
for(let x = 1; x < 32; x++){
    let newElement = document.createElement("tr")
    newElement.setAttribute("id", `row${x}`)

    let currentElement = document.getElementById(`row${x - 1}`)
    let parent = currentElement.parentNode
    parent.insertBefore(newElement, currentElement.nextSibling);
}

//Function to create columns for data table. This is where the id for
//each individual cell is specified. Changing the string within the
//will change the id attribute of the cells
const createDataColumn = category =>{
    for(let x = 1; x < 32; x++){
        let newElement = document.createElement("td");
        newElement.setAttribute("id", `${category}${x}`);
    
        let currentElement = document.getElementById(`row${x}`);
        let parent = currentElement.parentNode;
        parent.insertBefore(newElement, currentElement.nextSibling);
    }
}

//Function to create data forms for each cell
const dataForms = (form, category, input) =>{
    //This loop creates the form element. In order to work this loop
    //needs the category id
    for(let x = 1; x < 32; x++){
        let newElement = document.createElement("form");
        newElement.setAttribute("id", `${form}${x}`);
    
        let currentElement = document.getElementById(`${category}${x}`);
        currentElement.appendChild(newElement);
    }
    //This loop creates the label element
    for(let x = 1; x < 32; x++){
        let newElement = document.createElement("label");
        newElement.setAttribute("for", `${input}${x}`);
        let newContent = document.createTextNode("$");
        newElement.appendChild(newContent);
    
        let currentElement = document.getElementById(`${form}${x}`);
        currentElement.appendChild(newElement);
    }
    //This loop creates the input cell. In order to work it uses the form
    //id created by the first for loop to know where to insert the input cell
    //into the body of the html page
    for(let x = 1; x < 32; x++){
        let newElement = document.createElement("input");
        newElement.type = "number";
        newElement.setAttribute("id", `${input}${x}`);
        
        let currentElement = document.getElementById(`${form}${x}`);
        currentElement.appendChild(newElement)
    }
}

//Data columns, please keep this order. If you take it out of order
//The table will be screwed up.
createDataColumn("balanceTotal");
createDataColumn("income");
createDataColumn("discretionary");
createDataColumn("vehicleGas");
createDataColumn("foodGroceries");
createDataColumn("utilities");
createDataColumn("mortgageRent");

//Day data column. This is specifically set aside because it has a
//special need to generate text content
for(let x = 1; x < 32; x++){
    let newElement = document.createElement("td");
    newElement.setAttribute("id", `day${x}`);
    let newContent = document.createTextNode(`Day ${x}`);
    newElement.appendChild(newContent);

    let currentElement = document.getElementById(`row${x}`);
    let parent = currentElement.parentNode;
    parent.insertBefore(newElement, currentElement.nextSibling);
}

//Please keep these in order. Taking them out of order will screw up the table.
dataForms("mortgageForm", "mortgageRent", "mortgageRentInput");
dataForms("utilitiesForm", "utilities", "utilitiesInput");
dataForms("foodGroceriesForm", "foodGroceries", "foodGroceriesInput");
dataForms("vehicleGasForm", "vehicleGas", "vehicleGasInput");
dataForms("discretionaryForm", "discretionary", "discretionaryInput");
dataForms("incomeForm", "income", "incomeInput");
dataForms("balanceTotalForm", "balanceTotal", "balanceTotalInput");
//////////////////////////////////////
//                                  //
//    End of Summary Table Code     //
//                                  //
//////////////////////////////////////