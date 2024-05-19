import { createSelector } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { state } from "./bookSlice";

export const useFiction = (genreVal) => {
    const books = createSelector(state, (state) => state.books.filter(book => book.genre === genreVal))
    return useSelector(books)
}

// export const useHorror = (huinya) => {
//     const fiction = createSelector(state, (state) => state.books.filter(book => book.genre === huinya))
//     return useSelector(fiction)
// }

// export const useFantasy = () => {
//     const fiction = createSelector(state, (state) => state.books.filter(book => book.genre === 'Fantasy'))
//     return useSelector(fiction)
// }
