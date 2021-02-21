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
test("One euro should be 1.206 dollars", function(){
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
test("100 euros should be 127900 yens", function(){
    // importo la funcion desde app.js
    const { fromEuroToYen } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const yens = fromEuroToYen(100)

    // is 100 euro son 12900 yens, entonces 100 euros deberian ser = (100 * 127900)
    const expected = 100 * 127.9; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(yens);
})
//*****************british pound*************************** 
test("Ten euro should be 8 british pound", function(){
    // importo la funcion desde app.js
    const { fromEuroToBritishPound } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const bp = fromEuroToBritishPound(10)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 10 * 0.8; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(bp);
})