require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('', {age: 1}).then((res)=>{
    console.log(user)
    return User.countDocuments({ age: 19 })
}).then((res) => {
    console.log(res)
}).catch((e) => {
    console.log(e)
})

const updateAgeAndCount = async(id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({ age })
    return count

}

updateAgeAndCount('6245329110f350fc3c18bdfd', 2).then((count) => {
    console.log(count)
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.error(e)
})