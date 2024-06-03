import { configureStore } from "@reduxjs/toolkit"

import authSlice from './auth'

export default configureStore({
    reducer: {
        auth: authSlice
    }
})