import TodoList from "./todo.js";

let newTDL = new TodoList()

newTDL.addTask('Buy cucumber')
newTDL.addTask('Code')
newTDL.addTask('Rest')
newTDL.markTaskAsComplete(1)
let tasks = newTDL.listAllTasks()
console.log(tasks);