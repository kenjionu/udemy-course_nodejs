/**
 * Goal: Create method to get incomplete tasks
 * 
 * 1. Deefine getTaskToDo method
 * 2. Use filter to return just the incompleted tasks (arrow function)
 * 3. Test your work by running the script
 */

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed:true
    }, {
        text: 'Clean yard',
        completed: false,
    }, {
        text: 'Film course',
        completed: false,
    }],
    getTaskToDo() {
        return this.tasks.filter((task) => task.completed === false)
    }
}
console.log(tasks.getTaskToDo())