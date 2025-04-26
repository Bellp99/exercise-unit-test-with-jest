// We declare the function with the exact name "fromEuroToDollar"
const fromDollarToYen = function(valueYen) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

module.exports = { sum, fromEuroToDollar }
