import { useEffect, useState } from 'react';
import { BACKEND_ENDPOINT } from './../../config/endpoints';
import axios from 'axios';
import { Navigate, useLocation } from 'react-router-dom';

export default function AuthGuard({ Component, role }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const location = useLocation()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BACKEND_ENDPOINT}/auth/user`, {
                    withCredentials: true,
                });
                setData(response.data.data);
            } catch (error) {
                setData(null);
            }
            setLoading(false);
        };
        
        fetchData()
    }, [location])
    
    if (loading) {
        return 'loading ...';
    }
    
    if (data === null) {
        return role === 'guest' ? <Component /> : <Navigate to="/login" />;
    }
    
    if (role === 'guest') {
        return <Navigate to="/" />;
    }
    
    if (data && data.role && data.role === role) {
        return <Component />;
    }
    
    return 'not allowed';
}
