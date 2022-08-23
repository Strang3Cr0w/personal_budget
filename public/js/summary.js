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
        newElement.setAttribute("value", '0');
        
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

const deleteButton = document.getElementById("delete");
const confirmDeleteBox = document.getElementById("confirmDeleteBox");
const cancelButton = document.getElementById("cancel");
const areYouSure = document.getElementById("areYouSure");

const openConfirmDeleteBox = () =>{
    confirmDeleteBox.style.top = "17%";
}
    
const closeConfirmDeleteBox = () =>{
    confirmDeleteBox.style.top = "-100vh";
}

deleteButton.addEventListener("click", openConfirmDeleteBox);
cancelButton.addEventListener("click", closeConfirmDeleteBox);

const monthList = document.getElementById("monthList");

const thirtyDays = () =>{
    document.getElementById("day31").style.visibility = "hidden";
    document.getElementById("mortgageRent31").style.visibility = "hidden";
    document.getElementById("utilities31").style.visibility = "hidden";
    document.getElementById("foodGroceries31").style.visibility = "hidden";
    document.getElementById("vehicleGas31").style.visibility = "hidden";
    document.getElementById("discretionary31").style.visibility = "hidden";
    document.getElementById("income31").style.visibility = "hidden";
    document.getElementById("balanceTotal31").style.visibility = "hidden";
}

const thirtyOneDays = () =>{
    if(document.getElementById("day29").style.visibility === "hidden"){
        for(let x = 29; x < 32; x++){
            document.getElementById(`day${x}`).style.visibility = "visible";
        }
        for(let x = 29; x < 32; x++){
            document.getElementById(`mortgageRent${x}`).style.visibility = "visible";
        }
        for(let x = 29; x < 32; x++){
            document.getElementById(`utilities${x}`).style.visibility = "visible";
        }
        for(let x = 29; x < 32; x++){
            document.getElementById(`foodGroceries${x}`).style.visibility = "visible";
        }
        for(let x = 29; x < 32; x++){
            document.getElementById(`vehicleGas${x}`).style.visibility = "visible";
        }
        for(let x = 29; x < 32; x++){
            document.getElementById(`discretionary${x}`).style.visibility = "visible";
        }
        for(let x = 29; x < 32; x++){
            document.getElementById(`income${x}`).style.visibility = "visible";
        }
        for(let x = 29; x < 32; x++){
            document.getElementById(`balanceTotal${x}`).style.visibility = "visible";
        }
        }else{
            document.getElementById("day31").style.visibility = "visible";
            document.getElementById("mortgageRent31").style.visibility = "visible";
            document.getElementById("utilities31").style.visibility = "visible";
            document.getElementById("foodGroceries31").style.visibility = "visible";
            document.getElementById("vehicleGas31").style.visibility = "visible";
            document.getElementById("discretionary31").style.visibility = "visible";
            document.getElementById("income31").style.visibility = "visible";
            document.getElementById("balanceTotal31").style.visibility = "visible";
    }
}

const february = () =>{
    for(let x = 29; x < 32; x++){
        document.getElementById(`day${x}`).style.visibility = "hidden";
    }
    for(let x = 29; x < 32; x++){
        document.getElementById(`mortgageRent${x}`).style.visibility = "hidden";
    }
    for(let x = 29; x < 32; x++){
        document.getElementById(`utilities${x}`).style.visibility = "hidden";
    }
    for(let x = 29; x < 32; x++){
        document.getElementById(`foodGroceries${x}`).style.visibility = "hidden";
    }
    for(let x = 29; x < 32; x++){
        document.getElementById(`vehicleGas${x}`).style.visibility = "hidden";
    }for(let x = 29; x < 32; x++){
        document.getElementById(`discretionary${x}`).style.visibility = "hidden";
    }
    for(let x = 29; x < 32; x++){
        document.getElementById(`income${x}`).style.visibility = "hidden";
    }
    for(let x = 29; x < 32; x++){
        document.getElementById(`balanceTotal${x}`).style.visibility = "hidden";
    }
}

monthList.addEventListener("input", () =>{
    switch(monthList.value){
        case "January": thirtyOneDays();
        break;
        case "February": february();
        break;
        case "March": thirtyOneDays();
        break;
        case "April": thirtyDays();
        break;
        case "May": thirtyOneDays();
        break;
        case "June": thirtyDays();
        case "July": thirtyOneDays();
        break;
        case "August": thirtyOneDays();
        break;
        case "September": thirtyDays();
        break;
        case "October": thirtyOneDays();
        break;
        case "November": thirtyDays();
        break;
        case "December":thirtyOneDays();
        break;
        default: break;
    }

})

const submit = document.getElementById("submit");

submit.addEventListener("click", () =>{
    const accountBalance = document.getElementById("accountBalance").value;
    fetch(`/summary?accountBalance=${accountBalance}`, { method: "POST"});
    document.getElementById("saved").innerHTML = "Saved!";
        setTimeout(function(){
        saved.innerHTML = "";
        }, 2500);
})

const confirmDelete = document.getElementById("areYouSure");
const everythingDeleted = document.getElementById("everythingDeleted");

confirmDelete.addEventListener("click", () =>{
    fetch("/budget/delete", { method: "DELETE"});
    fetch("/expenses/delete", { method: "DELETE"});
    fetch("/income/delete", { method: "DELETE"});
    fetch("/summary/delete", { method: "DELETE"});
    closeConfirmDeleteBox;
    everythingDeleted.style.top = "17%";
    setTimeout(function(){
        window.location.href = "./index.html";
    }, 2500);
});

