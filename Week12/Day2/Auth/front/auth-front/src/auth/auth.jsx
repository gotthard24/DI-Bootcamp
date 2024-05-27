import { Children, useContext, useEffect, useState } from "react";
import { AuthContext } from "../App";
import axios from "axios";

const Auth = ({children}) =>{
    const {token} = useContext(AuthContext)
    const [redirect,setRedirect] = useState(false)

    useEffect(()=>{
        verify()
    }, [])

    const verify = async() => {
        try {
            const response = await axios.get('http://127.0.0.1:3001/users/verify',
                {
                    headers: {
                        'x-access-token': token?.token
                    },
                    withCredentials: true
                }
            )
            if(response.status === 200) setRedirect(true)
        } catch (error) {
            setRedirect(false)
        }
    }

    return redirect ? children : <><h1>Not Authorized</h1></>
}

export default Auth