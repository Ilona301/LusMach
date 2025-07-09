import {configureStore} from "@reduxjs/toolkit";
import dressesReducer from './Slices/dressesSlice.js'

export const store = configureStore({
    reducer:{
        dresses: dressesReducer
    }
})