import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";



export const fetchCorsets = createAsyncThunk(
    'corsets/fetchCorsets',
    async (_,thunkAPI) => {
        try{
            const response = await axios.get('http://localhost:4000/corsets');
            return response.data;

        }catch(err){
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

const corsetsSlice = createSlice({
    name: 'corsets',
    initialState: {
        corsets:[],
        filtered:[],
        loading:false,
        error:null
    },
    reducers: {
        filterPrice: (state, action) => {
            const {min,max} = action.payload;
            state.filtered = state.corsets.filter(
                (item) => +item.price >= min && +item.price<=max
            );
        },
        clearFilter: (state, action) => {
            state.filtered = state.corsets
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCorsets.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
        .addCase(fetchCorsets.fulfilled, (state, action) => {
            state.loading = false;
            state.corsets = action.payload;
            state.filtered = action.payload;

        })
        .addCase(fetchCorsets.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        });
    },
});


export const {filterPrice,clearFilter} = corsetsSlice.actions;
export default corsetsSlice.reducer;