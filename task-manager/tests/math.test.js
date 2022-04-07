const { calculateTip, rules3, fahrenheitToCelsius, celsiusToFahrenheit, add } = require('../src/math')

test('Should calculate total with tip', () => {
    const total = calculateTip(10, .3)

    // if( total != 13) {
    //     throw new Error('Total tip should be 13. Got ' + total)
    // }
    expect(total).toBe(13)
})

test('Should calculate total with default tip ', () => {
    const total = calculateTip(10, .5)
    expect(total).toBe(15)

})

test('Should calculate rules 3 with default tip',() => {
    const unit = 20;
    const price = 5000;
    const total = rules3(unit, price)
    expect(total).toBe(100000)
})

test('Should convert 32 F to a 0 C', () => {
    const temp = fahrenheitToCelsius(32)
    expect(temp).toBe(0)
})

test('Should convert 32 C to a C', () => {
    const temp = celsiusToFahrenheit(0)
    expect(temp).toBe(32)
})

// test('Async test demo', () => {
//     setTimeout(() => {
//         expect(1).toBe(2)
//         done()
//     }, 2000)
// })

test('Shoould be add two numbers for sum', (done) => {
    add(2, 3).then((sum) => {
        expect(sum).toBe(5)
        done()
    })
})

test('Should add two numbers with async await', async() => {
    const sum = await add(10, 22)
    expect(sum).toBe(32)
})

// test('hello world', () => {

// })

// test('this should by fail', () => {
//     throw new Error('failure');
// })


/**
 * Why test?
 * 
 * - Saves Time
 * - Creates reliable software
 * - Gives flexibility to developers
    * - Refactoring
    * - Collaborating
    * - Profiling
    * - Peace of mind
 */