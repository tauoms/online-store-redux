import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    products: [{
        id: 1,
        description: "This is a product",
    }],
}

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},

})

export default productSlice.reducer;