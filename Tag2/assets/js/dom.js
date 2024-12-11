console.log("aus dom.js")

//aufrufen eines speziellen Elements aus der DOM
const elementAusDom = document.getElementById("element");
const mainElement = document.getElementById("main");
const footerElement = document.getElementById("footer")


//elementAusDom.innerText = "Aus JS" //plain text;
elementAusDom.innerHTML = "<i>Aus JS</i>" //html rendering


//create a new Element
const div = document.createElement("div");
const footerHeader = document.createElement("h3");
const footerDivElement = document.createElement("div");


//modified text
footerHeader.innerText = "Das ist der Footer";
footerDivElement.innerText = "Telefon: 089-1234";
div.innerHTML = "<h3>neues Element aus JS</h3>"


// modify design
//by inlineStyle
footerHeader.style.color ="red";
footerHeader.style.fontSize = "3rem";
//footerHeader.style = "color: red; font-size: 3rem"


//byClass Style
footerDivElement.className = "phoneStyle phoneTextColor";
footerDivElement.classList.remove("phoneTextColor");
footerDivElement.classList.add("hallo");


main.appendChild(div);
footerElement.append(footerHeader, footerDivElement)

console.log("h1", elementAusDom)