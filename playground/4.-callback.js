setTimeout(() => {
    console.log('two seconds are up')
}, 1000)


const names = ['Andrew', 'Jen', 'Jess'];
const shortNames = names.filter((name)=> {
    return name.length <= 4
})

const geocode = (address, callback) => {
    setTimeout(()=>{
        const data= {
            latitude: 0,
            longitude: 0,
        }

        callback(data)
    }, 2000)

    
}

const data = geocode('Caracas', (data) => {
    console.log(data)
})
// console.log(data)

// const doWorkCallback = (callback) => {
//     setTimeout(() => {
//         // callback('This is my error!', undefined)
//         callback(undefined, [1, 4, 7])
//     }, 2000)
// }

// doWorkCallback((error, result) => {
//     if (error) {
//         return console.log(error)
//     }

//     console.log(result)
// })



const testing = (callback) => {
    setTimeout(() => {
        callback([1,2,3,4,5], undefined)
    },  2000)
}

testing((result, error) => {
    if(error) {
        return console.warn(error)
    } else{
        console.log(result.reduce((previousValue, currentValue) => previousValue + currentValue));
    }
})


