import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItem: null,
};

const CartDetailsSlice = createSlice({
    name: 'cartItem',
    initialState,
    reducers: {
        setCartItem: (state, action) => {
            state.cartItem = action.payload;
        },
    },
});

export const { setCartItem } = CartDetailsSlice.actions;

export default CartDetailsSlice.reducer;
