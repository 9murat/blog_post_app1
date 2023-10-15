import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalWindow: false,
    informationModalWindow: false,
}
export const modalSlice = createSlice({
    name: 'modalSlice',
    initialState,
    reducers: {
        setModalWindow: (state) => {
            state.modalWindow = !state.modalWindow;
        },
        setInformationModalWindow: (state) => {
            state.informationModalWindow = !state.informationModalWindow;
        },
    },
})


export const { setModalWindow,setInformationModalWindow} = modalSlice.actions;
export default modalSlice.reducer;