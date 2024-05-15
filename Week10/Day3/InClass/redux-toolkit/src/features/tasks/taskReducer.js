import {v4 as uuidv4} from 'uuid'

export const ADD_TASK = 'add_task'
export const COMPLETE_TASK = 'complete_task'
export const REMOVE_TASK = 'remove_task'

const InitialState = {
    tasks: []
}
export const taskReducer = (state = InitialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            const newTask = [...state.tasks];
            newTask.push({id: uuidv4(), task: action.payload, isCompleted: false})
            return {...state, tasks: newTask}
        case COMPLETE_TASK:
            const newTask2 = state.tasks.map(item => {
                return item.id === action.id ? {...item, isCompleted: !item.isCompleted} : item
            })
            return {...state, tasks: newTask2}
        case REMOVE_TASK:
            const notToDelete = state.tasks.filter(item => item.id !== action.id);
            return {...state, tasks: notToDelete}
        default:
            return state;
    }
}