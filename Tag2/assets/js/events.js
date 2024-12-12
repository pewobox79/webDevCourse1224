console.log("events.js")
//elemente holen aus DOM

const searchInput = document.getElementById("searchInput");
const burgerIcon = document.getElementById("burgerIcon");
const closeButton = document.getElementById("closeButton");
const mobileNav = document.getElementById("mobileNav");
const heading = document.getElementById("heading");


//define event function
function logName() {
    alert("hallo Peter"); //wenn alert triggered dann unterbricht JS an diesem Punkt...erst bei schließen von Alert fenster, läuft JS weiter!!
}

function handleSearchInputChange(event) {
    console.log("input changed", event.target.value)
    heading.innerText = event.target.value

   //neues element erstellen
    const newElement = document.createElement("h1");
    newElement.style.fontSize = "3rem";

    //werte aus event übergeben in innertext
    newElement.innerText = event.target.value;

    //element ausgeben
    footerElement.append(newElement);
}

function handleMobileNavOpen(){
    console.log("open")
    mobileNav.className = "mobileOpen"
}

function handleMobileNavClose(){
    console.log("close")
    mobileNav.className = "mobileClosed"
}



//zuweisen der event function in Event typ
divButton.addEventListener("click", logName);
searchInput.addEventListener("change", handleSearchInputChange)
burgerIcon.addEventListener("click", handleMobileNavOpen)
closeButton.addEventListener("click", handleMobileNavClose)
