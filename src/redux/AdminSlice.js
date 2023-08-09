import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const AdminSlice = createSlice({
    name: 'adminItems',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
        deleteItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        updateItem: (state, action) => {
            const { id, updatedItem } = action.payload;
            const index = state.items.findIndex(item => item.id === id);
            state.items[index] = { ...state.items[index], ...updatedItem };
        },
        addNewItem: (state, action) => {
            state.items.push(action.payload);
        }
    },
});

export const { setItems, deleteItem, updateItem, addNewItem } = AdminSlice.actions;

export default AdminSlice.reducer;
