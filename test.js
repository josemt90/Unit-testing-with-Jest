// importar la función sum del archivo app.js
const { sum , fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});



//test dollar
test("One euro should be 1.206 dollars", function(){
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

//test yen 
test("One euro should be 127.9 yens", function(){

    expect(fromDollarToYen(2)).toBe(255.8);
})

//test pound
test("One euro should be 0.8 pounds", function(){

     let resultado = 205.32800000000003;
     resultado.toFixed(2)

    expect(fromYenToPound(256.66)).toBe(resultado);
})


