import React from 'react';
import './style/User.css';
import FaceIcon from '@material-ui/icons/Face';

function Users() {
    return (
        <div className="UserCity">
            <header>
            <h2>Liste des utilisateurs de la ville<FaceIcon /></h2>
            </header>
            <div className="ListUserCity">
                    <div className="User">
                    <div className="Users" id="1">
                        <p>Nom : Bope</p>
                        <p>Prenom : Dan</p>
                        <p>Ville : Ivry-Sur-Seine</p>
                        <p>Problemes déclarer : 5</p>
                        <p>Dernier problème déclarer : 08/09/2021</p>
                        <button className="button">Supprimer l'utilisateurs</button>
                        <button className="button">Donner des droits</button>
                    </div>
                    <div className="Users" id="2">
                        <p>Nom : adjovi</p>
                        <p>Prenom : Raphael</p>
                        <p>Ville : Ivry-Sur-Seine</p>
                        <p>Problemes déclarer : 2</p>
                        <p>Dernier problème déclarer : 04/09/2021</p>
                        <button className="button">Supprimer l'utilisateurs</button>
                        <button className="button">Donner des droits</button>
                        
                    </div>
                    <div className="Users" id="3">
                        <p>Nom : Djoi</p>
                        <p>Prenom : Abdel Fadhyl</p>
                        <p>Ville : Ivry-Sur-Seine</p>
                        <p>Problemes déclarer : 1</p>
                        <p>Dernier problème déclarer : 20/08/2021</p>
                        <button className="button">Supprimer l'utilisateurs</button>
                        <button className="button">Donner des droits</button>
                    </div>
    
                    </div>
            </div>
        </div>
    )
}

export default Users;