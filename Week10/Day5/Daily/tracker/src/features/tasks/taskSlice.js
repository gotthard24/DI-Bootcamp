import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    tasks: [{id: nanoid(), task: 'zaebatsya', category: 'Home'},
            {id: nanoid(), task: 'poslat vseh nahui', category: 'Work'}
    ],
    categories: [{id: nanoid(), name: 'Home'}, {id: nanoid(), name: 'Work'}],
    types: ['Home', 'Work']
  };

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
      addTask: (state, action) => {
        if (state.types.includes(action.payload.category))
        state.tasks.push({id: nanoid(), task: action.payload.task, isCompleted: false, isEditing: false, category: action.payload.category})
    },
      addCat: (state, action) => {
        state.categories.push({id: nanoid(), name: action.payload})
        state.types.push(action.payload)
      },
      removeTask: (state, action) => {
          const task = state.tasks.find(item => item.id === action.payload);
          state.tasks.splice(task, 1)
      },
      removeCat: (state, action) => {
        const cat = state.categories.find(item => item.id === action.payload.id);
        const catType = state.categories.find(item => item === action.payload.name)
        state.categories.splice(cat, 1)
        state.types.splice(catType, 1)
        state.tasks = state.tasks.filter(task => task.category !== cat.name);
      },
      completeTask: (state, action) => {
          const task = state.tasks.find(item => item.id === action.payload);
          if (task) task.isCompleted = !task.isCompleted;
      },
      editTask: (state,action) =>{
          const task = state.tasks.find(item => item.id === action.payload);
          if (task) task.isEditing = !task.isEditing
      }
    },
})

export const {addTask, removeTask, completeTask, editTask, addCat, removeCat} = taskSlice.actions
export const state = (state) => state.taskReducer

export default taskSlice.reducer