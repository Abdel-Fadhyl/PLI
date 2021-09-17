import Axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
    const [username, setUsername] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [repassword, setrePassword] = useState<string>("")


    const register = () => {
        Axios.post("http://localhost:4000/register", {
            username,
            email,
            password,
            repassword
    }, {
            withCredentials: true
        }).then(res => {
            if (res.data === "success"){
                window.location.href = "/"
            }
            console.log(res)
        })
    
    }

    
    
    return (
        <div className="registercont">
            <h1>Register</h1>
            <h3>Entre ton nom :</h3>
            <input className="sign" type="text" placeholder="username" onChange={e => setUsername(e.target.value)}/>
            <h3>Entre ton email :</h3>
            <input className="sign" type="text" placeholder="email" onChange={e => setEmail(e.target.value)}/>
            <h3>Entre ton mot de passe :</h3>
            <input className="sign" type="text" placeholder="password" onChange={e => setPassword(e.target.value)}/>
            <h3>confirme ton mot de passe :</h3>
            <input className="sign" type="text" placeholder="repassword" onChange={e => setrePassword(e.target.value)}/>
            <button onClick={register}>Enregistre toi</button>
            <Link to="/login">Tu as déja un compte ? Connecte toi</Link>
        
        </div>
    )
}
