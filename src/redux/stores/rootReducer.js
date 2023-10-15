import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import blogPostSlice from "../slices/blogPostSlice";
import modalSlice from "../slices/modalSlice";


export const rootReducer = combineReducers({
    userSlice: userSlice,
    blogPostSlice: blogPostSlice,
    modalSlice: modalSlice,
})