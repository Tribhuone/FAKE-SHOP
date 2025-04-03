
import { ActionTypes } from "../contants/action-types";

// In this file we define reducers (which create initial state and actions).

const initialState = {
    products: [],
}

// Here in the productReducers function we pass " state " and " action " as parameters.
// And Here we destructure the action as {type , payload};
// It is used to muted the state and return a newState value.

const productReducers = (state = initialState , action) => {
    switch(action.type){
        case ActionTypes.SET_PRODUCT:
            return {...state, products: action.payload};

        default:
            return state;
    }   
}

const selectedProductReducer = (state={}, {type , payload}) => {
    switch(type){
        // to render the selected product
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload};
        
        // to remove the previous product
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        
        default:
            return state;
    }
}

// Here we export the productReducers function so that it can be used in other files.
export { productReducers , selectedProductReducer };