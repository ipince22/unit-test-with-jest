// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

//*****************Dollar*************************** 
test("One euro should be 1.2 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const dollars = fromEuroToDollar(3.5)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(dollars);
})
//*****************YEN*************************** 
test("100 dolares should be 127900 yens", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // utilizo la function de la forma como se espera que funcione
    const yens = fromDollarToYen(100)

    // is 100 (dolares/euros) * valor yen
    const expected = Math.floor(100/1.2) * 127.9; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(yens);
})
//*****************british pound*************************** 
test("18000 yen should be 112 british pound", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const bp = fromYenToPound(18000)

    // is 18000(yen/euro) * valor libra
    const expected = Math.floor((18000/127.9)) * 0.8; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(bp);
})