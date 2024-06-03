import { useRoutes, Link } from "react-router-dom"
import Login from "../views/auth/Login"
import Register from "../views/auth/Register"


//guards
import RequireAuth from "../components/auth/RequireAuth"

export default function Routes(){
    let routes = useRoutes([
        {
            path: '/',
            // element: <RequireAuth component='<h1>Welcome to home page</h1>' role='user' />
            element: <h1>Welcome to home page</h1>
        },
        {
            path: '/login',
            // element: <RequireAuth component={ <Login /> } role='user' shouldBeAuth={ false } />,
            element: <Login />
        },
        {
            path: '/register',
            element: <Register />,
        },
    ])
    return routes
}