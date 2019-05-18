import * as Type from './../const/index';

// Products
export const Show_Products = () => {
    return {
        type: Type.SHOW_PRODUCTS
    };
}

// Cart
export const Show_cart = () => {
    return {
        type: Type.SHOW_CART
    };
};

export const Add_To_Cart = (product, quantity) => {
    return {
        type: Type.ADD_TO_CART,
        product,
        quantity
    };
};

export const Delete_Cart_Item = (id) => {
    return {
        type: Type.DELETE_CART_ITEM,
        id
    };
}

export const Quantity_Plus = (id) => {
    return {
        type: Type.QUANTITY_PLUS, 
        id
    };
}; 

export const Quantity_Minus = (id) => {
    return {
        type: Type.QUANTITY_MINUS, 
        id
    };
};