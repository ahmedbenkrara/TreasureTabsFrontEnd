import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import { BACKEND_ENDPOINT } from './../../config/endpoints' 
import { refreshToken } from "../../utils/auth"

axios.defaults.withCredentials = true

export const register = createAsyncThunk(
    'auth/register',
    async (payload, thunkAPI) => {
        try{
            await axios.post(`${BACKEND_ENDPOINT}/auth/register`, payload)
        }catch(error){
            if(error.response && error.response.data.errorCode !== 500){
                return thunkAPI.rejectWithValue(error.response.data.message)
            }else{
                return thunkAPI.rejectWithValue("Something went wrong please try again later !")
            }
        }       
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async (payload, thunkAPI) => {
        try{
            await axios.post(`${BACKEND_ENDPOINT}/auth/login`, payload)
        }catch(error){
            if(error.response && error.response.data.errorCode !== 500){
                return thunkAPI.rejectWithValue(error.response.data.message)
            }else{
                return thunkAPI.rejectWithValue("Something went wrong please try again later !")
            }
        }       
    }
)

export const getUser = createAsyncThunk(
    'auth/getUser',
    async (payload, thunkAPI) => {
        try{
            const res = await axios.get(`${BACKEND_ENDPOINT}/auth/user`, {
                withCredentials: true,
            })
            return res.data.data
        }catch(error){
            if(error.response.data.errorCode == 403 && error.response.data.message.toLowerCase() == 'access token isn\'t valid !'){
                const res = await refreshToken()
                if(res.status == 'success')
                    return res.user
            }
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
)