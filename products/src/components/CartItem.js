import React, { Component } from 'react';
class CartItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            product: {},
            quantity: 1
        }
    }
    componentWillMount(){
        this.setState({
            product: this.props.cartItem.product,
            quantity: this.props.cartItem.quantity
        });
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            product: nextProps.cartItem.product,
            quantity: nextProps.cartItem.quantity
        });
    }
    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    Delete_Cart_Item = () => {
        const id = this.props.cartItem.product.id;
        this.props.Delete_Cart_Item(id);
    };
    Quantity_Plus = () => {
        const id = this.props.cartItem.product.id;
        this.props.Quantity_Plus(id);
    };
    Quantity_Minus = () => {
        const id = this.props.cartItem.product.id;
        this.props.Quantity_Minus(id);
        if(this.state.quantity === 1){
            this.Delete_Cart_Item();
        }
    };
    render() {
        const {index} = this.props;
        const {product, quantity} = this.state;
        return (
            <tr>
                <td className="text-center align-middle">{index + 1}</td>
                <td><img src={product.imageURL} className="img-thumbnail" alt="Cinque Terre" width="150" height="150" /></td>
                <td className="align-middle">{product.name}</td>
                <td className="align-middle">${product.price}</td>
                <td className="align-middle" width="150">
                    <p></p>
                    <div className="input-group">
                        <span className="input-group-btn">
                            <button type="button" className="btn btn-danger btn-number" data-type="minus" data-field="quant[2]" onClick = {this.Quantity_Minus}>
                                <i className="fa fa-minus"></i>
                            </button>
                        </span>
                        <input type="text" name="quantity" className="form-control input-number"  min="1" max="100" value={quantity} onChange = {this.handleChange} />
                        <span className="input-group-btn">
                            <button type="button" className="btn btn-success btn-number" data-type="plus" data-field="quant[2]" onClick = {this.Quantity_Plus}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </span>
                    </div>
                    <p></p>
                </td>
                <td className="align-middle text-center">${product.price*quantity}</td>
                <td className="align-middle">
                    <button type="button" className="btn btn-danger" onClick = {this.Delete_Cart_Item}>Delete</button>
                </td>
            </tr>
        );
    }
}


export default CartItem;
