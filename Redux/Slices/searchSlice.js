import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: "",
    minPrice: "",
    maxPrice: "",
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        setMinPrice: (state, action) => {
            state.minPrice = action.payload;
        },
        setMaxPrice: (state, action) => {
            state.maxPrice = action.payload;
        },
        clearPrices: (state) => {
            state.minPrice = "";
            state.maxPrice = "";
        },
    },
});

export const { setSearch, setMinPrice, setMaxPrice, clearPrices } = searchSlice.actions;
export default searchSlice.reducer;
