import React from 'react'
import { Input } from '../../componets/Form/Input'
import './Login.scss'

const Login = () => {
    return (
        <div className="login">
            <div className="form-container">
                <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />

                <form action="/" className="form">
                    <label htmlFor="email" className="label">Email address</label>
                    <Input type={'email'} placeholder={'ejemplo@email.com'} />

                    <label htmlFor="password" className="label">Password</label>
                    <Input type={'password'} />

                    <Input type={"submit"} value={'login'} />
                    <a href="/">htmlForgot my password</a>
                </form>

                <button className="secondary-button signup-button">Sign up</button>
            </div>
        </div>
    )
}

export { Login }