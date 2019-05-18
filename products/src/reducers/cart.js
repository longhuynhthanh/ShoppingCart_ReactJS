import * as Type from '../const/index';
const dataCart = JSON.parse(sessionStorage.getItem('cart'));
const cart = dataCart ? dataCart : [];

const myReducer = (state = cart, action) => {
    switch (action.type) {
        case Type.SHOW_CART:{
            return [...state];
        }
        case Type.ADD_TO_CART: {
            const index = state.findIndex(cartItem => cartItem.product.id === action.product.id);
            if(index !== -1){
                state[index] = {...state[index], quantity: state[index].quantity + 1};
            }else{
                const cartItem = {
                    product: action.product,
                    quantity: action.quantity
                };
                state.push(cartItem);
            }
            sessionStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        }
        case Type.DELETE_CART_ITEM: {
            state = state.filter(cartItem => cartItem.product.id !== action.id);
            sessionStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        }
        case Type.QUANTITY_PLUS: {
            const index = state.findIndex(cartItem => cartItem.product.id === action.id);
            if(index !== -1){
                state[index] = {...state[index], quantity: state[index].quantity + 1};
            }
            sessionStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        }
        case Type.QUANTITY_MINUS: {
            const index = state.findIndex(cartItem => cartItem.product.id === action.id);
            if(index !== -1){
                state[index] = {...state[index], quantity: state[index].quantity - 1};
            }
            sessionStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        }
        default: {
            return [...state];
        }
    }
};

export default myReducer;