import * as Type from '../const/index';
const id = require('uuid/v4');
const dataProducts = JSON.parse(localStorage.getItem('products'));
const products = dataProducts ? dataProducts : [];

const myReducer = (state = products, action) => {
    switch (action.Type) {
        case Type.SHOW_PRODUCTS:{
            return [...state];
        }
        default: {
            return [...state];
        }
    }
};

export default myReducer;