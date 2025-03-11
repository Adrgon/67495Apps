import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
    name: "auth", 
    initialState: {
        value: {
            user: null,
            token: null,
            //localId: null,
            //imageCamera: null
        }
    },
    reducers: {
        setUser: (state, {payload})=> {
            state.value.user = payload.email
            state.value.token = payload.idToken
            //state.value.localId = payload.localId
        }, 
        clearUser: (state)=> {
            state.value.user = null
            state.value.token = null
        },
    }
})

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
