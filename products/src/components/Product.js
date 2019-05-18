import React, { Component } from 'react';
class Product extends Component {
    Add_To_Cart = () => {
        this.props.Add_To_Cart(this.props.product, 1);
    }
    render() {
        const {product} = this.props;
        return (
            <article className="card col-xs-12 col-md-4 text-center">
                <img className="card-img-top img-responsive" src={product.imageURL} alt="Deer in nature" />
                <div className="card-block">
                    <h4 className="card-title">{product.name}</h4>
                    <h4 className="text-muted">${product.price}</h4>
                    <p className="card-text">{product.description}</p>
                    <button className="btn btn-danger" onClick = {this.Add_To_Cart}>Add To Cart</button>
                    <button className="btn btn-success">Detail</button>
                </div>
            </article>
        );
    }
}

export default Product;
