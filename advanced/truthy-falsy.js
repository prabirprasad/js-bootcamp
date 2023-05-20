const products = [
    {
        name: 'Computer mouse'
    }
]
product = products[0]

// Truthy - Values that are resolved to true in boolean context
// Truthy values - Everything except the falsy values even an empty array or an empty object
// Falsy - Values that are resolved to false in boolean context
// Falsy value - fasle, 0, empty string, null, undefined, NaN

if (product) {
    console.log('Product found');
} else {
    console.log('Product not found');
}