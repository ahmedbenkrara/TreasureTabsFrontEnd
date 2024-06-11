import { useRoutes } from "react-router-dom"
import React, { lazy } from "react"

import AuthGuard from "../guards/auth/AuthGuard"
import HomeLayout from "../views/client/HomeLayout"

const Login =  lazy(() => import("../views/auth/Login"))
const Register =  lazy(() => import("../views/auth/Register"))
const SocialMedia =  lazy(() => import("../views/client/SocialMedia"))

export default function Routes(){

    let routes = useRoutes([
        {
            path: '/',
            element: <HomeLayout />,
            children: [
                {
                    index: true,
                    element: <AuthGuard Component={ SocialMedia } role='user' />,
                },
            ]
        },
        {
            path: '/login',
            element: <AuthGuard Component={ Login } role='guest' />
        },
        {
            path: '/register',
            element: <AuthGuard Component={ Register } role='guest' />
        },
        {
            path: '/403',
            element: <h1>403</h1>
        },
        {
            path: '*',
            element: <h1>404</h1>
        }
    ])
    return routes
}