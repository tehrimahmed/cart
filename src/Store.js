import { combineReducers, createStore } from 'redux';
import { cartReducer } from './redux/reducers/Reducer';
import AdminSliceReducer from './redux/AdminSlice'; 

const rootReducer = combineReducers({
    cartReducer,
    adminItems: AdminSliceReducer
});

const store = createStore(rootReducer);

export default store;
