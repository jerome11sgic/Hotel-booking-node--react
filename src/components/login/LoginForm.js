import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { BwmInput }  from '../shared/form/Bwminput';
import {required, minLength4} from'../shared/form/Validators';
import { BwmResError } from'../shared/form/BwmResError';

const LoginForm = props => {

    const { handleSubmit, pristine,submitting, submitCb, valid,errors} = props
    return (
        <form onSubmit={handleSubmit(submitCb)}>
            <Field
                name="email"
                component="input"
                type="email"
                label="email"
                className='form-control'
                component={BwmInput}
                validate={[required,minLength4]}
            />
            <Field
                name="password"
                component="input"
                type="password"
                label="password"
                className='form-control'
                component={BwmInput}
                validate={[required]}
            />
            <button className='btn btn-bwm btn-form' type="submit" disabled={!valid || pristine || submitting}>
                Login
        </button>
        <BwmResError errors={errors}/>
        </form>

    )
}
export default reduxForm({
    form: 'loginForm'// a unique identifier for this form
})(LoginForm)