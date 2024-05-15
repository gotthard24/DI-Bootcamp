import {v4 as uuidv4} from 'uuid'

export const ADD_TASK = 'add_task'
export const COMPLETE_TASK = 'complete_task'
export const REMOVE_TASK = 'remove_task'
export const EDIT_TASK = 'edit_task'
export const SET_CURRENT_DATE = 'set_current_date'

const InitialState = {
    currentDate: '',
    tasks: [{id: uuidv4(), task: 'Example', isCompleted: false, isEditing: false, date: '2024-05-14'}]
}

export const TaskReducer = (state = InitialState, action) =>{
    switch (action.type) {
        case SET_CURRENT_DATE:
            return {...state, currentDate: action.payload}
        case ADD_TASK: {
            if (state.currentDate === '') return state
            const newTask = [...state.tasks];
            newTask.push({id: uuidv4(), task: action.payload, isCompleted: false, isEditing: false, date: state.currentDate})
            return {...state, tasks: newTask}
        }
        case COMPLETE_TASK:
            const newTaskToggle = state.tasks.map(item => {
                return item.id === action.id ? {...item, isCompleted: !item.isCompleted} : item
            })
            return {...state, tasks: newTaskToggle}
        case REMOVE_TASK:
            const notToDelete = state.tasks.filter(item => item.id !== action.id);
            return {...state, tasks: notToDelete}
        case EDIT_TASK:
            const newTaskEdit = state.tasks.map(item => {
                return item.id === action.id ? {...item, isEditing: !item.isEditing} : item
            })
            return {...state, tasks: newTaskEdit}
        default:
            return state;
    }
}