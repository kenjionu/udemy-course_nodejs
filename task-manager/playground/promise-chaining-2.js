require('../src/db/mongoose');
const Task = require('../src/models/task')

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false})
    return count
}

deleteTaskAndCount('62452c0f652631e8db4c7eff').then((count) => {
    console.log(count)
}).catch((e)=> {
    console.log(e)
})