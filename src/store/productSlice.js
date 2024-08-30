import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const api = "https://fakestoreapi.com/products";

// Best practice: Functions go at the top
export const fetchProducts = createAsyncThunk("products/products", async () => {
    const response = await axios.get(api);
    return response.data;
});

// Best practice: initialState comes before the reducer
const initialState = {
    products: [],
};

export const productSlice = createSlice({
    name: "products",
    initialState,
    // Reducers are used for internal app state management (not from API or remote)
    reducers: {},
    // Extra reducers are used for Async calls
    extraReducers(builder) {
        builder
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
        });
    },
});

export default productSlice.reducer;