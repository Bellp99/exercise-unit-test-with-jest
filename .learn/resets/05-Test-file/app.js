const sum = (a,b) => {
    return a + b
}


console.log(sum(9,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum };