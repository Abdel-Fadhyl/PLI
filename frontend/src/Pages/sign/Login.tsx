import Axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    
    const login = () => {
        Axios.post("http://localhost:4000/login", {
            username,
            password
    }, {
            withCredentials: true
        }).then(res => {
            if (res.data === "success"){
                window.location.href = "/"
            }
            console.log(res)
        })
    }

    const getUser = () => {
        Axios.get("http://localhost:4000/user", {
            withCredentials: true
        }).then(res => {
            console.log(res.data);
        })
    }


    return (
        <div className="logincont">
            <h1>Login</h1>
            <h3>Entre ton nom :</h3>
            <input className="sign" type="text" placeholder="username" onChange={e => setUsername(e.target.value)}/>
            <h3>Entre ton mot de passe :</h3>
            <input className="sign" type="text" placeholder="password" onChange={e => setPassword(e.target.value)}/>
            <button onClick={login}>Connecte toi</button>
            <Link to="/register">Tu n'as pas de compte ? Crée toi en un</Link>
            <Link to="/forgotpassword">Mot de passe oublié</Link>
            <button onClick={getUser}>getuser</button>
        </div>
    )
}
