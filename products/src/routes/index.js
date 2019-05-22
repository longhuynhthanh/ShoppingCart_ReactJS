import React from 'react';
import CartContainer from '../Containers/CartContaier';
import ProductsContainer from '../Containers/ProductsContainer';
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <ProductsContainer />
    },
    {
        path: '/cart',
        exact: false,
        main: () => <CartContainer />
    }
];

export default routes;