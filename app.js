// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)



let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// funcion que devuelve dolares
const fromEuroToDollar = (euros) => {

    return  euros * oneEuroIs.USD;

}
console.log(fromEuroToDollar(3.5));

// funcion que devuelve yenes
const fromDollarToYen = (fromEuroToDollar) =>{

    return fromEuroToDollar * oneEuroIs.JPY;
}

console.log(fromDollarToYen(5));

// funcion que devuelve pounds
const fromYenToPound = (fromDollarToYen) => {

    return fromDollarToYen * oneEuroIs.GBP;
}

console.log(fromYenToPound(5));

// exportamos las funciones  
module.exports = { sum , fromEuroToDollar , fromDollarToYen, fromYenToPound };