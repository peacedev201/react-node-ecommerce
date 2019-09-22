/**
 *  Filter Products
 */
import {
    FETCH_SINGLE_PRODUCT_FILTER_VALUE,
    RECEIVE_PRODUCTS_FILTER_VALUE } from "../constants/ActionTypes";


const initialState = {
    products: [],
    symbol: '$',
    product_details: []
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS_FILTER_VALUE:
            return { ...state,
                products: action.products };
        case FETCH_SINGLE_PRODUCT_FILTER_VALUE:
            if (state.products.findIndex(product => product.id === action.productId) !== -1) {
                const singleItem = state.products.reduce((itemAcc, product) => {
                    return product
                }, [])
                return { ...state,
                    product_details: singleItem };
            }
        default:
            return state;
    }
};
export default productReducer;