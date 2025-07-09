import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchDresses = createAsyncThunk(
    'dresses/fetchDresses',
    async (_, thunkAPI) =>{
        try {
            const response = await axios.get('http://localhost:4000/dresses')
            console.log(response)
            return response.data
        }catch (err){
            return thunkAPI.rejectWithValue(err.message)
        }
    }
)
    const dressesSlice = createSlice({
        name: 'dresses',
        initialState: {
            dresses: [],
            filtered: [],
            loading: false,
            errors: null
        },
        reducers: {
            filterByPrice: (state, action) => {
                const { min, max } = action.payload
                state.filtered = state.dresses.filter(
                    (d) => +d.price >= min && +d.price <= max
                )
            },
            clearFilter: (state) => {
                state.filtered = state.dresses
            },
        },
        extraReducers: (builder)=>{
            builder
                .addCase(fetchDresses.pending, (state)  =>{
                state.loading = true
                state.errors = null
            })
                .addCase(fetchDresses.fulfilled, (state, action) =>{
                    state.dresses = action.payload
                    state.filtered = action.payload
                    state.loading = false
                })
                .addCase(fetchDresses.rejected, (state, action) =>{
                    state.loading = false
                    state.erors = action.payload
            })

        }

    })

export const { filterByPrice, clearFilter } = dressesSlice.actions
export default dressesSlice.reducer