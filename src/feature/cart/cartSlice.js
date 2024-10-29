import { createSlice } from "@reduxjs/toolkit";

// const BASE_URL = "https://81cbb5a9-d419-4981-a914-31087e169667-00-2c59gjl1023od.pike.replit.dev/";


// export const fetchCartByUser = createAsyncThunk(
//     "cart/fetchByUser",
//     async (userId) => {
//       const response = await fetch(`${BASE_URL}/cart/user/${userId}`);
//       return response.json();
//     }
//   );

//   export const saveItem = createAsyncThunk(
//     "cart/saveItem",
//     async (postContent) => {
//       const token = localStorage.getItem("authToken");
//       const decode = jwtDecode(token);
//       const userId = decode.id;

//       const data = {
//         name: "cartName",
//         price: cartPrice,
//         user_id: userId,
//       };

//       const response = await axios.post(`${BASE_URL}/cart`, data);
//       return response.data;
//     }
//   );

//   const cartSlice = createSlice({
//     name: "cart",
//     initialState: { cart: [], loading: true },
//     extraReducers: (builder) => {
//       builder.addCase(fetchCartByUser.fulfilled, (state, action) => {
//         state.posts = action.payload;
//         state.loading = false;
//       }),
//         builder.addCase(saveCart.fulfilled, (state, action) => {
//           state.cart = [action.payload, ...state.cart];
//         });
//     },
//   });

//   export default cartSlice.reducer;









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