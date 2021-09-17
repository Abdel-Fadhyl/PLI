import React from 'react'

export default function Adminlitle() {
    return (
            <div>

            <div className="adminpage">
                <div className="adminuser">
                    <div>Role : Petit employe </div>
                    <div className="image-pb-user"></div>
                    <div>Nom : Mairerere </div>
                    <div>Prenom : Marie </div>
                    <div>Ville : Marly </div>
                </div>

                <div className="adminpagepb">
                    <div className="list-pb-admin"><h2>Liste des problemes a régler</h2></div>
                        <div className="firstpb"> Problem 1 
                            <div className="image-pb-admin"></div>
                            <button>Classer le problem</button>
                            <button>le problem est classé</button>
                        </div>
                        <div className="firstpb"> Problem 2 
                            <div className="image-pb-admin"></div>
                            <button>Classer le problem</button>
                            <button>le problem est classé</button>
                        </div>
                        <div className="firstpb"> Problem 3 
                            <div className="image-pb-admin"></div>
                            <button>Classer le problem</button>
                            <button>le problem est classé</button>
                        </div>
                </div>

                <div className="list-all-user">
                    <div className="adminpageusermairie">
                        <div className="list-user-admin"><h2>Liste des utilisateurs de la mairie</h2></div>
                        <div className="firstuser"> 
                                <div className="infouser">
                                    <div className="image-user-admin"></div>
                                        <div className="infos-case">
                                        <div>Nom : assee </div>
                                        <div>prenom : Paul </div>
                                        <div>Ville : Paris </div>
                                        <div>role : gerant des services technique</div>
                                </div>
                                </div>
                                <button>Voir informations</button>
                                <button>Enleever sa fonction d admin</button>
                            </div>

                            <div className="firstuser"> 
                                <div className="infouser">
                                    <div className="image-user-admin"></div>
                                        <div className="infos-case">
                                        <div>Nom : assee </div>
                                        <div>prenom : Paul </div>
                                        <div>Ville : Paris </div>
                                        <div>role : gerant des services technique</div>
                                </div>
                                </div>
                                <button>Voir informations</button>
                                <button>Enleever sa fonction d admin</button>
                            </div>


                            <div className="firstuser"> 
                                <div className="infouser">
                                    <div className="image-user-admin"></div>
                                        <div className="infos-case">
                                        <div>Nom : assee </div>
                                        <div>prenom : Paul </div>
                                        <div>Ville : Paris </div>
                                        <div>role : gerant des services technique</div>
                                </div>
                                </div>
                                <button>Voir informations</button>
                                <button>Enleever sa fonction d admin</button>
                            </div>
                    </div>
                    <div className="adminpageuser">
                        <div className="list-user-admin"><h2>Liste des utilisateurs de la ville</h2></div>
                        <div className="firstuser"> 
                                <div className="infouser">
                                    <div className="image-user-admin"></div>
                                        <div className="infos-case">
                                        <div>Nom : naza </div>
                                        <div>prenom : jokair </div>
                                        <div>Ville : Paris </div>
                                        <div>cas rapporter : 4</div>
                                </div>
                                </div>
                                <button>Voir informations</button>
                                <button>Enlever sa fonction d admin</button>
                            </div>
                            
                            <div className="firstuser"> 
                                <div className="infouser">
                                    <div className="image-user-admin"></div>
                                        <div className="infos-case">
                                        <div>Nom : roro </div>
                                        <div>prenom : ninho </div>
                                        <div>Ville : Paris </div>
                                        <div>cas rapporter : 4</div>
                                </div>
                                </div>
                                <button>Voir informations</button>
                                <button>Enlever sa fonction d admin</button>
                            </div>
                            <div className="firstpb"> user 3 
                                <div className="image-pb-admin"></div>
                                <button>Ajouter sa fonction d'admin</button>
                                <button>Noter dans la societe</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
