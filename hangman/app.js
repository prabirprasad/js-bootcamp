// product --> Object.prototype --> null

const product = new Object({
    name: 'Rest'
})

Object.prototype.someNewMethod = () => 'THis is testing'

console.log(product.someNewMethod());
console.log(product);