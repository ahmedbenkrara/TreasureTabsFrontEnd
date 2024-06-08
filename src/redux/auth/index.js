import { createSlice } from "@reduxjs/toolkit"
import { register, login, getUser } from './actions'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        errorMessage: null,
        status: 'idle',
        user: null
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

            state.status = 'loading'
        })
        .addCase(getUser.fulfilled, (state, action) => {
            state.status = 'success'
            state.user = action.payload
        })
        .addCase(getUser.rejected, (state, action) => {
            state.status = 'failed'
            state.user = null
            state.errorMessage = action.payload
        })
    }
})

export const { setStatus } = authSlice.actions 

export default authSlice.reducer