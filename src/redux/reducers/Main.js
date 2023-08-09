import { combineReducers } from 'redux';
import { cartReducer } from './Reducer';
import cartItemReducer from './CartDetailsSlice'; 

const rootred = combineReducers({
    cartReducer,
    cartItem: cartItemReducer
});

export default rootred;
