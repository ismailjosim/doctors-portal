
import { useEffect, useState } from "react";

const useToken = email => {
    const [token, setToken] = useState('');

    useEffect(() => {
        if (email) {
            fetch(`https://doctor-portal-server-tawny.vercel.app/jwt?email=${ email }`)
                .then(res => res.json())
                .then(data => {

                    // console.log(data);
                    if (data.token) {
                        localStorage.setItem('userAccessToken', data.token);
                        setToken(data.token);
                    }
                });
        }
    }, [email]);
    return [token];
}

export default useToken;
