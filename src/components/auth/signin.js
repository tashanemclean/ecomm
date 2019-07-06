import React, {Component} from "react"

import {reduxForm, Field } from "redux-form"
import SignInForm from "./signinForm"
import PageTitle from "../pageTitle"
import {connect} from 'react-redux'
import * as actions from '../../actions'


class SignIn extends Component {

    componentDidMount(){
        this.props.setHeaderLinks([])
        this.props.setNavbarLinks([])
    }

    onSubmit = (fields) => {
        console.log(fields)
    }

    render () {
        return (
            <div className="sign-in">
                <PageTitle className="sig-in__page-title" title="Login" />
                <SignInForm onSubmit={this.onSubmit} className='sign-in__form' />
            </div>
        )
    }
}

SignIn = connect(null, actions)(SignIn)

export default SignIn