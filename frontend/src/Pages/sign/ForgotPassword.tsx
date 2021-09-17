import React from 'react'

export default function ForgotPassword() {
    return (
        <div className="logincont">
            <h3>Mot de passe oubliée</h3>
            <h6>Email</h6>
            <input className="sign" type="text" placeholder="Entre ton email"/>
            <button> Envoi un mail pour récupérer ton mot de passe</button> 
        </div>
    )
}
