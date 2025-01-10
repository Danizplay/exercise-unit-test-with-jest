test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
})

test("One dollar should be 156.5 yen", function() {
    const { fromDollarToYen } = require('./app.js')
    const yen = fromDollarToYen (15);
    const expected = 15 * 156.5;
    expect(fromDollarToYen(15)).toBe(2347.50);
})

test("One yen should be 0.87 gbp", function() {
    const { fromYenToPound } = require('./app.js')
    const pound = fromYenToPound (55);
    const expected = 10 * 0.87;
    expect(fromYenToPound(10)).toBe(8.70);
})