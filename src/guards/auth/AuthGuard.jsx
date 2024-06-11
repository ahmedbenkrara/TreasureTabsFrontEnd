import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';


import { useDispatch, useSelector } from 'react-redux'
import { getUser } from './../../redux/auth/actions'

export default function AuthGuard({ Component, role }) {
    const location = useLocation()

    const dispatch = useDispatch()
    const { userstatus, user } = useSelector((state) => state.auth)
    
    useEffect(() => {
        dispatch(getUser())
    }, [location, dispatch])

    if (userstatus == 'loading') {
        return 'loading ...';
    }
    
    if (user === null) {
        return role === 'guest' ? <Component /> : <Navigate to="/login" />;
    }
    
    if (role === 'guest') {
        return <Navigate to="/" />;
    }
    
    if (user && user.role && user.role === role) {
        return <Component />;
    }
    
    return 'not allowed';
}
