import { configureStore, combineReducers } from "@reduxjs/toolkit";
import taskReducer from '../features/tasks/slice'
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const combiner = combineReducers({taskReducer})

const store = configureStore({
    reducer: combiner
})

export type StoreStateType = ReturnType<typeof store.getState>
export type StoreDispatchType = typeof store.dispatch

export const useAppDispatch: () => StoreDispatchType = useDispatch;
export const useAppSelector: TypedUseSelectorHook<StoreStateType> = useSelector;

export default store