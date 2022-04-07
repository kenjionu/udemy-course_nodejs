const calculateTip = (total, tipPercent) => total + (total * tipPercent)

const rules3 = (price, unit) => unit * price

const fahrenheitToCelsius = (temp) => {
    return (temp - 32) / 1.8
}

const celsiusToFahrenheit = (temp) => {
    return (temp * 1.8) + 32
}
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(a < 0 || b < 0) {
                return reject('')
            }

            resolve(a + b)
        }, 2000)
    })
}

module.exports = {
    calculateTip,
    rules3,
    fahrenheitToCelsius,
    celsiusToFahrenheit,
    add
}