import { createSlice } from "@reduxjs/toolkit";

// const BASE_URL = "https://81cbb5a9-d419-4981-a914-31087e169667-00-2c59gjl1023od.pike.replit.dev/";


// export const fetchCartByUser = createAsyncThunk(
//     "posts/fetchByUser",
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
//         id: "post title",
//         : postContent,
//         user_id: userId,
//       };

//       const response = await axios.post(`${BASE_URL}/posts`, data);
//       return response.data;
//     }
//   );

//   const postsSlice = createSlice({
//     name: "posts",
//     initialState: { posts: [], loading: true },
//     extraReducers: (builder) => {
//       builder.addCase(fetchPostsByUser.fulfilled, (state, action) => {
//         state.posts = action.payload;
//         state.loading = false;
//       }),
//         builder.addCase(savePost.fulfilled, (state, action) => {
//           state.posts = [action.payload, ...state.posts];
//         });
//     },
//   });

//   export default postsSlice.reducer;









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