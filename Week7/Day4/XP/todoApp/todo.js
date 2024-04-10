class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({ task, completed: false });
    }

    markTaskAsComplete(index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks[index].completed = true;
        }
    }

    listAllTasks() {
        return this.tasks.map((task, index) => {
            return `${index + 1}. ${task.completed ? '[x]' : '[ ]'} ${task.task}`;
        }).join('\n');
    }
}

export default TodoList;