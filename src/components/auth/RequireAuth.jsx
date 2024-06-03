import { useEffect, useState } from "react"
import checkAuth from "./../../guards/auth/checkAuth"
import { Navigate } from "react-router-dom"

const RequireAuth = ({ component, role, shouldBeAuth = true }) => {
    const [authenticated, setAuthenticated] = useState(null)

    useEffect(() => {
        // const checkAuth = async () => {
        //     const authenticated = await checkAuth(role)
        //     setAuthenticated(authenticated)
        // }

        setAuthenticated(checkAuth(role))
        
        checkAuth()
    }, [])

    if(authenticated == null){
        return <div>Loading ...</div>
    }

    return authenticated  == shouldBeAuth ? component : shouldBeAuth ? <Navigate to="/login" /> : <Navigate to="/" />
}

export default RequireAuth