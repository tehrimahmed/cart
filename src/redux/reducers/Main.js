import { combineReducers } from 'redux';
import { cartReducer } from './Reducer';
import cartItemReducer from './redux/CartDetailsSlice'; 
import authReducer from './AuthSlice';

const rootReducer = combineReducers({
    cartReducer,
    cartItem: cartItemReducer,
    auth: authReducer,
});

export default rootReducer;



