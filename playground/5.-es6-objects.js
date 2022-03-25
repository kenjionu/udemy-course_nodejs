const name = "Andrew"
const userAge = 59

const user = {
    name: name,
    age: userAge,
    location: 'Philadelphia'
}

console.log(user)


const product = {
    label: 'Red notebook',
    price: 30,
    stock: 201,
    salePrice: undefined
}

/*
const label = product.label
const stock = product.stock
*/

const { label, price, stock } = product;

console.log(label)
console.log(price)
console.log(stock)
