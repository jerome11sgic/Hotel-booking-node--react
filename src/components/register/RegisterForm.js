import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { BwmInput }  from '../shared/form/Bwminput';
import { BwmResError } from'../shared/form/BwmResError';
const RegisterForm = props => {

    const { handleSubmit, pristine,submitting, submitCb, valid,errors } = props
    return (
        <form onSubmit={handleSubmit(submitCb)}>
            <Field
                name="userName"
                component="input"
                type="text"
                className='form-control'
                label="Username"
                component={BwmInput}
            />
            <Field
                name="email"
                component="input"
                type="email"
                label="email"
                className='form-control'
                component={BwmInput}
            />
            <Field
                name="password"
                component="input"
                type="password"
                label="password"
                className='form-control'
                component={BwmInput}
            />
            <Field
                name="passwordConfirmation"
                component="input"
                type="password"
                label="password Confirmation"
                className='form-control'
                component={BwmInput}
            />
            <button className='btn btn-bwm btn-form' type="submit" disabled={!valid || pristine || submitting}>
                Register
        </button>
        <BwmResError errors={errors}/>
        </form>

    )
}

const validate = values => {
    const errors = {}
    if (values.userName && values.userName.length < 4) {
        errors.userName = "UserName min length is 4 characters!";
    }
    if (!values.email) {
        errors.email = "Please enter email";
    }
    if (!values.passwordConfirmation) {
        errors.password = "please enter password Confirmation";
    }
    if (values.password !== values.passwordConfirmation) {
        errors.passwordConfirmation = "password must be the same";
    }
    return errors
}

export default reduxForm({
    form: 'registerForm',// a unique identifier for this form
    validate 
})(RegisterForm)