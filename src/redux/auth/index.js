import { createSlice } from "@reduxjs/toolkit"
import { register, login, getUser } from './actions'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        errorMessage: null,
        status: 'idle',
        user: null,
        userstatus : 'loading'
    },
    reducers: {
        setStatus: (state, action) => {
            state.status = action.payload
            state.errorMessage = ''
        }
    },
    extraReducers: (builder) => {
        builder
        //register
        .addCase(register.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(register.fulfilled, (state) => {
            state.status = 'success'
        })
        .addCase(register.rejected, (state, action) => {
            state.status = 'failed'
            state.errorMessage = action.payload
        })
        //login
        .addCase(login.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(login.fulfilled, (state) => {
            state.status = 'success'
        })
        .addCase(login.rejected, (state, action) => {
            state.status = 'failed'
            state.errorMessage = action.payload
        })
        //getUser
        .addCase(getUser.pending, (state) => {
            state.userstatus = 'loading'
        })
        .addCase(getUser.fulfilled, (state, action) => {
            state.userstatus = 'success'
            state.user = action.payload
        })
        .addCase(getUser.rejected, (state, action) => {
            state.userstatus = 'failed'
            state.user = null
        })
    }
})

export const { setStatus } = authSlice.actions 

export default authSlice.reducer