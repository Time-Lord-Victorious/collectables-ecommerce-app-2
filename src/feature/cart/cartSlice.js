import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        totalPrice: 0,
        products: [],
    },
    reducers: {
        addToCart: (state, action) => {

            const itemIndex = state.products.findIndex(
                (item) => item.id === action.payload.id
            );

            if (itemIndex >= 0) {

                state[itemIndex].amount += 1;
            } else {

                const newProduct = { ...action.payload, amount: 1 };
                console.log(newProduct);
                state.products.push(newProduct);
                state.totalPrice
            }
        },
    },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;