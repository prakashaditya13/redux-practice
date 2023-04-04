import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        username: ""
    }
}

const userSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },

        logout: (state) => {
            state = initialState
        }
    }
})

// console.log(userSlice.actions)
export const {login, logout} = userSlice.actions

export const Store = configureStore({
    reducer: {
        User: userSlice.reducer
    }
})