import { createSelector } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { getPosts, state } from "./postSlice";
import { useCallback } from "react";

export const usePostSelector = () => {
    const selectorPosts = createSelector(state, (state) => state.posts)
    return useSelector(selectorPosts)
}

export const usePostStatus = () => {
    const selectorStatus = createSelector(state, (state) => state.status)
    return useSelector(selectorStatus)
}

export const useGetPosts = () => {
    const dispatch = useDispatch()
    return useCallback(() => {
        dispatch(getPosts())
    }, [dispatch])
}