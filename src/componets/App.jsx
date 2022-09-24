import React from "react";
import '../styles/styles.scss'
import { Login } from "../containers/login/Login";
import { Layout } from "../containers/layout/Layout";

const App = () => {
    return (
        <Layout>
            <Login />
        </Layout>
    )
}

export default App 