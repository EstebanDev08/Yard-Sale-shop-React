import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import '../styles/styles.scss'
import { Layout } from "../containers/layout/Layout";
import { RecoveryPassword } from "../containers/RecoveryPassword/RecoveryPassword";
import { Home } from "../pages/Home/Home";
import { Notfound } from "../pages/NotFound/NotFound";
import { Login } from "../pages/Login/Login";
import { NewPassword } from "../pages/NewPassword/NewPassword";
import { MyAccount } from "../pages/MyAccount/MyAccount";


const App = () => {
    return (
        <BrowserRouter>
            <Layout>

                <Routes>

                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/new-password" element={<NewPassword />} />
                    <Route exact path="/recovery-password" element={<RecoveryPassword />} />
                    <Route exact path="/my-account" element={<MyAccount />} />

                    <Route path="*" element={<Notfound />} />


                </Routes>
            </Layout>
        </BrowserRouter>

    )
}

export default App 