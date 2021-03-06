import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import PageTitle from '../pageTitle';
import ReviewForm from './reviewForm';

class Review extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        // this.props.setHeaderLinks([]);
        // this.props.setNavbarLinks([]);
    }

    onSubmit = (fields) => {
        console.log('fields')
    }
    render() {
        let subTotal = 0;
        this.props.cartProducts.map(cartProdcut => {
            subTotal += cartProdcut.quantity * cartProdcut.product.price;
        })
        return (
            <div className="review">
                <PageTitle className='review__page-title' title='Order Review'/>
                <ReviewForm className='review__form' onSubmit={this.onSubmit} subTotal={subTotal} />
            </div>
        )
    }
}

function mapeStateToPtops(state) {
    const { cartProducts } = state.user;
    return { cartProducts }
}

Review = connect(mapeStateToPtops, actions)(Review);

export default Review;