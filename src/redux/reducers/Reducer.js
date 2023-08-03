const initState = {
    cartItems: []
};

export const cartReducer = (state = initState, action)=>{
    switch(action.type){
        case "ADD":
            return{
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        default:
            return state
    }
}; 