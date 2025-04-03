
import { ActionTypes } from "../contants/action-types";

// access the action types to perform with stateVariables.

// Here we pass the product details in each function.

const setProducts = (products) => {
    return{
        type : ActionTypes.SET_PRODUCT,
        payload : products,
    };
}

const seletedProduct = (product) => {
    return{
        type : ActionTypes.SELECTED_PRODUCT,
        payload : product,
    };
}

const removeSeletedProduct = () => {
    return{
        type : ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
}

export { setProducts , seletedProduct , removeSeletedProduct };
