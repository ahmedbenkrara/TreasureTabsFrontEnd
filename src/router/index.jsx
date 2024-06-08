import { useRoutes, Link } from "react-router-dom"
import React, { lazy } from "react"
// import Login from "../views/auth/Login"
// import Register from "../views/auth/Register"

const Login =  lazy(() => import("../views/auth/Login"))
const Register =  lazy(() => import("../views/auth/Register"))
import Home from "../views/client/Home"
import Test from "../views/client/Test"
import AuthGuard from "../guards/auth/AuthGuard"

export default function Routes(){

    let routes = useRoutes([
        {
            path: '/',
            element: <AuthGuard Component={ Home } role='user' />
        },
        {
            path: '/test',
            element: <AuthGuard Component={ Test } role='admin' />
        },
        {
            path: '/login',
            element: <AuthGuard Component={ Login } role='guest' />
        },
        {
            path: '/register',
            element: <AuthGuard Component={ Register } role='guest' />
        },
    ])
    return routes
}