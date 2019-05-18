import React, { Component } from 'react';
import ProductContainer from '../Containers/ProductContainer';
class Products extends Component {
    render() {
        const {products} = this.props;
        const elem = products.map((product, index) => {
            return <ProductContainer
                        key = {index}
                        product = {product}
                     />
        });
        return (
            <div className="container-fluid">
                <div className="row">
                    {/* Product */}
                    {products.length > 0 ? elem : <h1>No Products</h1>}
                    {/* End Product */}
                </div>
            </div>
        );
    }
}

export default Products;
