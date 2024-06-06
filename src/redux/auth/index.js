import { createSlice } from "@reduxjs/toolkit"
import { register, login } from './actions'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        errorMessage: null,
        status: 'idle'
    },
    reducers: {
        setStatus: (state, action) => {
            state.status = action.payload
            state.errorMessage = ''
        }
    },
    extraReducers: (builder) => {
        builder
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
    }
})

export const { setStatus } = authSlice.actions 

export default authSlice.reducer