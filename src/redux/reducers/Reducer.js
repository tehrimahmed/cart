const initState = {
    cartItems: []
};

export const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD":
            const itemID= state.cartItems.findIndex((item)=>item.id===action.payload.id)
            if(itemID >= 0){
                state.cartItems[itemID].qnty +=1
                return {
                    ...state,
                    cartItems:[...state.cartItems]
                }
            }else{
                const temp = {...action.payload,qnty:1}
                 return {
                    ...state,
                    cartItems: [...state.cartItems, temp]
                }
            }
        case "DLT":
            const data = state.cartItems.filter((e) => e.id !== action.payload);

            return {
                ...state,
                cartItems: data
            }

        default:
            return state
    }
}; 