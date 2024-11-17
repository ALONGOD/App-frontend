import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart.actions';

const initialState = {
    cart: []
};

export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.product]
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item._id !== action.productId)
            };
        default:
            return state;
    }
}