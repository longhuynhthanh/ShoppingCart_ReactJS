import React, { Component } from 'react';
import NavigationContainer from '../Containers/NavigationContainer';
import TitleContainer from '../Containers/TitleContainer';
import ProductsContainer from '../Containers/ProductsContainer';
import CartContainer from '../Containers/CartContaier';
class Content extends Component {
    render() {
        return (
            <div id="page-content-wrapper" >
                {/* Navigation */}
                <NavigationContainer />
                {/* End Navigation */}

                {/* Title */}
                <TitleContainer />
                {/* End Title */}

                {/* Products */}
                <ProductsContainer />
                {/* End Products */}
                <hr />
                
                {/* Cart */}
                <CartContainer />
                {/* End Cart */}
            </div >
        );
    }
}
export default Content;
