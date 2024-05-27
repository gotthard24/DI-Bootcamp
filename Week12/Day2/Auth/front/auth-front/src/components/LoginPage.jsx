import { useState, useContext } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { Box, TextField, Button } from "@mui/material"
import { AuthContext } from "../App"

const LoginPage = ({page}) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [message, setMessage] = useState()

    const {setToken} = useContext(AuthContext)

    const navigate = useNavigate()

    const loginregister = async() =>{
        if(page === "Login"){
            try {
                const response = await axios.post('http://127.0.0.1:3001/users/login', {
                    email, password
                }, {withCredentials: true})
                if(response.status === 200){
                    setMessage('')
                    console.log(response.data);
                    setToken(response.data)
                    navigate('/')
                }
            } catch (error) {
                setToken(null)
                console.log(error);
            }
        } else {
            try {
                const response = await axios.post('http://127.0.0.1:3001/users/register', {
                    email, password
                }, {withCredentials: true})
                if(response.status === 200){
                    setMessage('')
                    console.log(response.data);
                    navigate('/login')
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <>
            <h1>{page}</h1>
            <Box component={'form'} sx={{m: 1}} noValidate autoComplete="off">
                <TextField InputProps={{style: { color: 'white' }}} sx={{m: 1}} InputLabelProps={{style: { color: 'white' }}} id="email" type="email" label="Enter your email" variant="outlined" onChange={(e) => setEmail(e.target.value)}/>
                <TextField InputProps={{style: { color: 'white' }}} sx={{m: 1}} InputLabelProps={{style: { color: 'white' }}} id="password" type="password" label="Enter your password" variant="outlined" onChange={(e) => setPassword(e.target.value)}/>
            </Box>
            <Button variant="contained" onClick={loginregister}>
                {page}
            </Button>
            <div>
                {message}
            </div>
        </>
    )
}

export default LoginPage