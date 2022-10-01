import { useState } from 'react'

export default function useToken(){
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString)
        return useToken?.token
    };

    const [token, setToken] = useState(getToken());

}