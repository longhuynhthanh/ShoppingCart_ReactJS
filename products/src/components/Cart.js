import React, { Component } from 'react';
import CartItemContainer from '../Containers/CartItemContainer';
class Cart extends Component {
    render() {
        const {cart} = this.props;
        const elm = cart.map((cartItem, index) => {
            return <CartItemContainer 
                        key = {index}
                        index = {index}
                        cartItem = {cartItem}
                    />
        });
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="panel panel-success col-12">
                        <table className="table table-hover col-12">
                            <thead>
                                <tr>
                                    <th className="text-center">#</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th className="text-center">Quantity</th>
                                    <th className="text-center">Total Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                               {cart.length > 0 ? elm : null}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;
