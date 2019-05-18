import React, { Component } from 'react';
import {connect} from 'react-redux';
import Cart from '../components/Cart';

class CartContainer extends Component {
    render() {
        const {cart} = this.props;
        return (
            <Cart
                cart = {cart} 
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
