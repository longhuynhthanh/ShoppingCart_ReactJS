import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Add_To_Cart} from '../actions/index';
import Product from '../components/Product';
class ProductContainer extends Component {
    render() {
        const {product, Add_To_Cart} = this.props;
        return (
            <Product 
                product = {product}
                Add_To_Cart = {Add_To_Cart}
            />
        );
    }
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        Add_To_Cart: (product, quantity) => {
            dispatch(Add_To_Cart(product, quantity));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
