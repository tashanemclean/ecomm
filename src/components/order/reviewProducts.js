import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewProduct extends Component {

    render() {
        const { className } = this.props;
        return (
            <div className={`${className} review-products`}>
                {
                    this.props.cartProducts.map(cartProduct => {
                        return <h1 key={cartProduct._id}>{cartProduct.product.title}</h1>
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { cartProducts } = state.user;
    return {cartProducts}
}

ReviewProduct = connect(mapStateToProps)(ReviewProduct)

export default ReviewProduct;