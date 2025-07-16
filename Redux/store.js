import {configureStore} from "@reduxjs/toolkit";
import dressesReducer from './Slices/dressesSlice.js'
import searchReducer from './Slices/searchSlice.js'
import corsetsReducer from './Slices/corsetSlice.js'


export const store = configureStore({
    reducer:{
        dresses: dressesReducer,
        search:searchReducer,
        corsets: corsetsReducer,
    }
})

export default store;