import React from "react";
import { Input } from "../../componets/Form/Input";
import './NewPassword.scss'

const NewPassword = () => {
    return (
        <div className="new-password">
            <div className="form-container">
                <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />

                <h1 className="title">Create a new password</h1>
                <p className="subtitle">Enter a new passwrd for yue account</p>

                <form action="/" className="form">
                    <label htnlfor="password" className="label">Password</label>
                    <Input type={'password'} />

                    <label htnlfor="new-password" className="label">Password</label>
                    <Input type={'password'} id={"new-password"} />

                    <Input type={"submit"} value={'Confirm'} />


                </form>
            </div>
        </div>
    )
}

export { NewPassword }