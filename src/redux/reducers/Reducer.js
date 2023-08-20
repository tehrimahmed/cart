const initState = {
    cartItems: []
};

export const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD":
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

            if (itemIndex >= 0) {
                return state;
            } else {
                const temp = { ...action.payload, qnty: 1 };
                return {
                    ...state,
                    cartItems: [...state.cartItems, temp]
                };
            };

        case "DLT":
            const data = state.cartItems.filter((e) => e.id !== action.payload);

            return {
                ...state,
                cartItems: data
            };
            
        case "UPDATE":
            return {
                ...state,
                cartItems: action.payload
            };

        default:
            return state
    }
}; 