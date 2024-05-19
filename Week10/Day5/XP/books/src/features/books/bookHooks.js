import { createSelector } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { state } from "./bookSlice";

export const useFiction = () => {
    const fiction = createSelector(state, (state) => state.books.filter(book => book.genre === 'Fiction'))
    return useSelector(fiction)
}

export const useHorror = () => {
    const fiction = createSelector(state, (state) => state.books.filter(book => book.genre === 'Horror'))
    return useSelector(fiction)
}

export const useFantasy = () => {
    const fiction = createSelector(state, (state) => state.books.filter(book => book.genre === 'Fantasy'))
    return useSelector(fiction)
}
