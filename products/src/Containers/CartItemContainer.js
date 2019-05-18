import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Delete_Cart_Item, Quantity_Plus, Quantity_Minus} from '../actions/index';
import Item from '../components/CartItem';
class CartItemContainer extends Component {
    render() {
        const {index, cartItem, Delete_Cart_Item, Quantity_Plus, Quantity_Minus} = this.props;
        return (
            <Item 
                index = {index}
                cartItem = {cartItem}
                Delete_Cart_Item = {Delete_Cart_Item}
                Quantity_Plus = {Quantity_Plus}
                Quantity_Minus = {Quantity_Minus}
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
        Delete_Cart_Item: (id) => {
            dispatch(Delete_Cart_Item(id));
        },
        Quantity_Plus: (id) => {
            dispatch(Quantity_Plus(id));
        },
        Quantity_Minus: (id) => {
            dispatch(Quantity_Minus(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItemContainer);
