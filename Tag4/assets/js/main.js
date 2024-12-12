//get elements from DOM
const articleName = document.getElementById("articleName");
const quantity = document.getElementById("quantity");
const submitButton = document.getElementById("submitButton");
const listItems = document.getElementById("listItems");


//global data
let articleNameValue = ""
let quantityValue = ""
const totalList = [] //init array


//event functions
function aName(e) {
    articleNameValue = e.target.value
}

function quantValue(e) {
    quantityValue = e.target.value
}

function submitData(e) {
    e.preventDefault() //neutralisiert das Buttonverhalten im Context von einem <form> Tag.

    //validierung
    if (articleNameValue.length == 0 || quantityValue.length == 0) {


        if (articleNameValue.length == 0 && quantityValue.length == 0) {
            alert("name und menge darf nicht leer sein")

        } else if (quantityValue.length == 0) {
            quantity.style.backgroundColor = "red";

        } else {
            alert("name fehlt")
        }


    } else {

        //html liste auf null setzen um verdoppelung der einträge zu vermeiden
        listItems.innerHTML = "";

        //temporärer speicher des objects for einen eintrag
        let obj = {
            name: articleNameValue,
            qnt: quantityValue
        }

        //füge ich das obj der total list hinzu...

        totalList.push(obj);

        //element erstellen und liste in html rendern

        totalList.forEach((item) => {

            //element erstellen für ein Item
            const outerDiv = document.createElement("div");
            const innerDiv = document.createElement("div");
            const name = document.createElement("h4");
            const quant = document.createElement("p");

            //styling hinzufügen
            outerDiv.className = "listItemWrapper";
            innerDiv.className = "listItemInner";

            //content hinzufügen
            name.innerText = item.name;
            quant.innerText = item.qnt;

            //element dem html hinzufügen
            innerDiv.append(name, quant);
            outerDiv.appendChild(innerDiv);

            listItems.append(outerDiv);

        })

        //form reset und reset temp data

        articleName.value = "";
        quantity.value = "";
        articleNameValue = "";
        quantityValue = "";

    }

}


//connect element mit event
articleName.addEventListener("change", aName);
quantity.addEventListener("change", quantValue);
submitButton.addEventListener("click", submitData);