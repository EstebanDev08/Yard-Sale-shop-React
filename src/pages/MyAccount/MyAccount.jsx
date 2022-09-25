import React from 'react'
import './MyAccount.scss'
import { Input } from '../../componets/Form/Input'

const MyAccount = () => {
    return (
        <div className="login">
            <div className="form-container">
                <h1 className="title">My account</h1>

                <form action="/" className="form">
                    <div>
                        <label htmlFor="name" className="label">Name</label>
                        <Input type={"text"} id={'name'} placeholder={"Your name"} />

                        <label htmlFor="email" className="label">Email</label>
                        <Input type={'email'} placeholder={'ejemplo@email.com'} />


                        <label htmlFor="password" className="label">Password</label>
                        <Input type={'password'} />
                    </div>

                    <Input type={"submit"} value={'Create'} />
                </form>
            </div>
        </div>
    )
}

export { MyAccount }