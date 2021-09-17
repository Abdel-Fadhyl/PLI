import React from 'react';
import './style/User.css';
import FaceIcon from '@material-ui/icons/Face';
import avatar  from '../img/avatar.png';

/*const HStyle = { weight: '100px', height: '50px' };*/

function UsersMairie () {
    return (
        <div className="UserCity">
            <header>
            <h2>Liste des utilisateurs de la mairie<FaceIcon /></h2>
            </header>
            <div className="ListUserCity">
                <div className="UsersM"> 
                    <div className="container">
                        <img src={avatar} alt="personnel" className="image" />
                        <div className="overlay">
                        <p>Nom : Perez </p>
                        <p>Prenom : Paul </p>
                        <p>Ville : Ivry-sur-Seine </p>
                        <p>Role : gerant des services techniques</p> 
                        </div> 
                    </div>
                    <button className='Select'>Enlever sa fonction d'admin</button>
                    <div className="container">
                        <img src={avatar} alt="personnel" className="image" />
                        <div className="overlay">
                        <p>Nom : Lièvin </p>
                        <p>Prenom : Gabriel </p>
                        <p>Ville : Ivry-sur-Seine </p>
                        <p>Role : gerant des services techniques</p> 
                        </div> 
                    </div>
                    <button className='Select'>Enlever sa fonction d'admin</button>
                    <div className="container">
                        <img src={avatar} alt="personnel" className="image" />
                        <div className="overlay">
                        <p>Nom : Nsingi </p>
                        <p>Prenom : Isaac </p>
                        <p>Ville : Ivry-sur-Seine </p>
                        <p>Role : RH</p> 
                        </div> 
                    </div>
                    <button className='Select'>Enlever sa fonction d'admin</button>
                </div>
            </div>
        </div>
    )
}

export default UsersMairie;