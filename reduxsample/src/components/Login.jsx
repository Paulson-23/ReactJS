import React from "react"
import { useRef } from "react"
import { useDispatch } from "react-redux"
import { login, logout } from "../redux/userSlice"

const Login = () => {
    const dispatch = useDispatch()
    const username = useRef(null)
    const handleLogin = (e) =>{
        e.preventDefault()
        dispatch(login({
            name: username.current.value
        }))
    }
    return(
        <div>
            <form onSubmit={handleLogin}>
                <input type="text" name="name" id="id" ref={username} required/>
                <button type="submit">Login</button>
            </form>
            <button onClick={()=>dispatch(logout())}>Logout</button>
        </div>
    )
}
export default Login