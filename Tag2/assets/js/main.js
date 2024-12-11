console.log("script aus main js");

/**
 * Datentypen javascript
 */

// folgend sind diese Datentypen PRIMITIVES DATA TYPES
const number = 10 //number => integer 
const number1 = 10
const string = 'ich bin ein string' //string
const float = 10.23 // float
const boolean = true //boolean => true oder false
const undefinedType = undefined
const nullType = null


//folgend DatenTypen NON-PRIMITIVES
const array = ["peter", "michael", "markus"] //array mit strings
const array1 = ["peter", "michael", "markus"]
const arrayNumbers = [10, 3, 5, 7];
const object = {
    name: "peter",
    age: 45,
    address: {
        city: "Pörnbach",
        street: "Lindenstrasse",
        zipCode: "85309"
    }
};
const mixedArray = [10, "peter", "20", ["michael", "markus"], object];

/**
 * Operatoren
 * 
 * = > setzt werte
 * == > vergleich werte von const OR variablen OHNE DATENTYP
 * === > vergleich werte UND DatenTyp
 */
console.log("vergleich", array == array1)
const newArray = array
console.log("vergleich non", array == newArray)
console.log("vergleich primitive", number == number1)
console.log(number, string, mixedArray)



//variable vs constant

const meineKonstante = "20"; // constant => ist fix in dem Wert und kann nicht verändert werden
let variableKonstante = "20" //variable => kann direkt verändert werden 
variableKonstante = "30"

console.log("konstante", meineKonstante, variableKonstante)


//vergleichen von werten

const wert1 = 2;
const wert2 = "2";

console.log("vergleich werte:", wert1 == wert2) // == => vergleich auf wert NICHT auf DATENTYP
console.log("vergleich datentype und wert", wert1 === wert2) // === => vergleich wert UND datentyp

//FUNCTIONEN in JS

//ARROW FUNCTION
const myFirstFunction = () => {

    const value = 10;
    const value2 = 20

    const result = value + value2 // block scope
    console.log("ergebnis", result)
    return result


}

const result = myFirstFunction();
console.log("outer result", result)



//HOISTING => functionen vor der initializierung aufrufen
myOtherFunction()
function myOtherFunction() {

    const vorname = "Peter";
    const nachname = "Wolf";

    const fullname = vorname + " " + nachname
    console.log("fullname", fullname)

}



//clean code approach

const addTwoNumber = (num1, num2) => {


    const result = num1 + num2 // block scope
    const finalResult = multiplyByTwo(result)
    console.log("ergebnis", result)
    return finalResult

}

const numberResult = addTwoNumber(20, 40)

function multiplyByTwo(value) {

    const result = value * 2
    return result
}


console.log("final result", numberResult)

