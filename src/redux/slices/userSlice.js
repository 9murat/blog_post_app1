import { createSlice } from "@reduxjs/toolkit";
import { showToast } from "../../components/utils/toast";

const fetchFromLocaleStorage = () => {
    let user = localStorage.getItem('user');
    if (user) {
        return JSON.parse(localStorage.getItem('user'));
    } else {
        return [];
    }
}

const storeInLocaleStorage = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
}



const initialState = {
    users: fetchFromLocaleStorage(),
    // users: [],
    error: false,
    isLogged: false,
    loggedUser: {},
}


let idCounter = 1;
export const userSlice = createSlice({

    name: 'userSlice',
    initialState,
    reducers: {
        addNewUser: (state, action) => {
            const id = idCounter++;
            const newUser = { ...action.payload, id: id };
            const findEmail = state.users.find((user) => user.email === newUser.email);
            const findPhoneNumber = state.users.find((user) => user.phone === newUser.phone);
            if (findEmail) {
                state.error = true;

                // alert(action.payload.email, ' is exist')
                // showToast('Bu kullkanıcı mevcut');

            } else if (findPhoneNumber) {
                state.error = true;
                alert(action.payload.phone, ' is exist')
            } else {
                state.error = false;
                state.users.push(action.payload);
                storeInLocaleStorage(state.users);
            }
        },
        login: (state, action) => {
            const findUser = state.users.find((user) => user.email === action.payload.email);
            if (findUser) {
                if (findUser.password === action.payload.password) {
                    state.isLogged = true;
                    state.loggedUser = findUser;
                } else {
                    alert(`${action.payload.password} is not exist!`);
                    state.isLogged = false;
                }
            } else {
                alert(`${action.payload.email} is not exist!`);
                state.isLogged = false;
            }
        },
        signOut: (state) => {
            state.isLogged = false;
        },
        forgotPassword: (state, action) => {
            const findUser = state.users.find(user => user.email === action.payload.email);
            if (findUser) {
                findUser.password = action.payload.password;
                storeInLocaleStorage(state.users);
                showToast('Password Updated Successfully');
            }
        },
        deleteProfile: (state, action) => {
            const findUser = state.users.find(user => user.id === state.loggedUser.id);
            if (findUser) {
                showToast('Profile deleted successfully');
                const newUsers = state.users.filter(user => user.id !== findUser.id);
                state.users = newUsers;
                state.loggedUser = {};
                state.isLogged = false;
                storeInLocaleStorage(state.users);

            }


        },
        updateUser: (state, action) => {
            const findUser = state.loggedUser;
            if (findUser) {
                state.loggedUser = { ...findUser, ...action.payload };
                state.users = state.users.map(user => {
                    if (user.id === findUser.id) {
                        return { ...user, ...action.payload };
                    }
                    return user;
                });
                storeInLocaleStorage(state.users);
            }
        },
        deleteAll: (state) => {
            state.users = [];
            storeInLocaleStorage(state.users);
        },



    },
});


export const { addNewUser, login, signOut, forgotPassword, deleteProfile, updateUser, deleteAll } = userSlice.actions;
export default userSlice.reducer;


