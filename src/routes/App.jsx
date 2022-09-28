import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import '../styles/styles.scss'
import { Layout } from "../containers/layout/Layout";
import { RecoveryPassword } from '../pages/RecoveryPassword/RecoveryPassword'
import { Home } from "../pages/Home/Home";
import { Notfound } from "../pages/NotFound/NotFound";
import { Login } from "../pages/Login/Login";
import { NewPassword } from "../pages/NewPassword/NewPassword";
import { CreateAccount } from "../pages/CreateAccount/CreateAccount";
import { EditAccount } from "../pages/EditAccount/EditAccount";
import { MyOrders } from "../pages/MyOrders/MyOrders";
import { Checkout } from "../pages/Checkout/Checkout";


const App = () => {
    return (
        <BrowserRouter>
            <Layout>

                <Routes>

                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/new-password" element={<NewPassword />} />
                    <Route exact path="/recovery-password" element={<RecoveryPassword />} />
                    <Route exact path="/create-account" element={<CreateAccount />} />
                    <Route exact path="/edit-account" element={<EditAccount />} />
                    <Route exact path="/my-orders" element={<MyOrders />} />
                    <Route exact path="/checkout" element={<Checkout />} />
                    <Route exact path="/edit-account" element={<EditAccount />} />
                    <Route exact path="/edit-account" element={<EditAccount />} />

                    <Route path="*" element={<Notfound />} />

                </Routes>
            </Layout>

        </BrowserRouter>

    )
}

export default App 