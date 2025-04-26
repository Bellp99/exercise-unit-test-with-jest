// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(dollar) {
    return dollar * 146.26;
}

const fromYenToPound = function(yen) {
    return yen * 0.006;
}

module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound}

