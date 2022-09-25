import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import '../styles/styles.scss'
import { Login } from "../containers/login/Login";
import { Layout } from "../containers/layout/Layout";
import { RecoveryPassword } from "../containers/RecoveryPassword/RecoveryPassword";
import { Home } from "../pages/Home/Home";
import { Notfound } from "../pages/NotFound/NotFound";


const App = () => {
    return (
        <BrowserRouter>
            <Layout>

                <Routes>

                    <Route exact path="/" element={<Home />} />

                    <Route exact path="/login" element={<Login />} />

                    <Route exact path="/recovery-password" element={<RecoveryPassword />} />

                    <Route path="*" element={<Notfound />} />


                </Routes>
            </Layout>
        </BrowserRouter>

    )
}

export default App 