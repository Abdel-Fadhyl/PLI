import React from 'react'
export default function AdmintestPage() {
    return (
        <div>
            <div className="adminpage">
                {/* <div className="adminuser">
                    <div>Role : Maire </div>
                    <div className="image-pb-user"></div>
                    <div>Nom : Mairerere </div>
                    <div>Prenom : Marie </div>
                    <div>Ville : Marly </div>
                </div> */}

                <div className="adminpagepb">
                    <div className="list-pb-admin"><h2>Liste des problemes à régler :</h2></div>

                        <div className="firstpb"> 
                            <div className="infopb">
                                <div className="image-pb-admin"></div>
                                <div className="infos-case">
                                    <div>Nom : Trou dans la route </div>
                                    <div>publie par : Marie </div>
                                    <div>Ville : Marly </div>
                                    <div>Description : ce trou est la depuis une semaine </div>
                                </div>
                            </div>
                            <button>Classer le problem</button>
                            <button>le problem est résolu</button>
                        </div>

                        <div className="firstpb"> 
                        <div className="infopb">
                            <div className="image-pb-admin"></div>
                            <div className="infos-case">
                                <div>Nom : Lampadaire cassee </div>
                                <div>publie par : Paul </div>
                                <div>Ville : Paris </div>
                                <div>Description : cette ruelle est sombre depuis plusieurs mois</div>
                            </div>
                            </div>
                            <button>Classer le problem</button>
                            <button>le problem est résolu</button>
                        </div>
                        <div className="firstpb"> 
                        <div className="infopb">
                            <div className="image-pb-admin"></div>
                            <div className="infos-case">
                                <div>Nom : Bouche d'égout </div>
                                <div>publie par : Joe </div>
                                <div>Ville : Paris </div>
                                <div>Description : ce trou est la depuis une semaine. Mon chat a failli tombé dedans</div>
                            </div>
                            </div>
                            <button>Classer le problem</button>
                            <button>Le problem est résolu</button>
                        </div>
                        <div className="firstpb"> 
                        <div className="infopb">
                            <div className="image-pb-admin"></div>
                            <div className="infos-case">
                                <div>Nom : Bouche d'égout </div>
                                <div>publie par : Joe </div>
                                <div>Ville : Paris </div>
                                <div>Description : ce trou est la depuis une semaine. Mon chat a failli tombé dedans</div>
                            </div>
                            </div>
                            <button>Classer le problem</button>
                            <button>Le problem est résolu</button>
                        </div>
                </div>

                <div className="list-all-user">
                    <div className="adminpageusermairie">
                        <div className="list-user-admin"><h2>Liste des utilisateurs de la mairie :</h2></div>
                        <div className="firstuser"> 
                                <div className="infouser">
                                    <div className="image-user-admin"></div>
                                        <div className="infos-case">
                                        <div>Nom : assee </div>
                                        <div>prenom : Paul </div>
                                        <div>Ville : Paris </div>
                                        <div>Role : gerant des services technique</div>
                                </div>
                                </div>
                                <button>Voir informations</button>
                                <button>Enlever sa fonction d admin</button>
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
                                <button>Enlever sa fonction d admin</button>
                            </div>

                            <div className="firstuser"> 
                                <div className="infouser">
                                    <div className="image-user-admin"></div>
                                        <div className="infos-case">
                                        <div>Nom : CB </div>
                                        <div>prenom : Bastien </div>
                                        <div>Ville : Paris </div>
                                        <div>Role : Gérant</div>
                                </div>
                                </div>
                                <button>Voir informations</button>
                                <button>Enlever sa fonction d admin</button>
                            </div>


                            <div className="firstuser"> 
                                <div className="infouser">
                                    <div className="image-user-admin"></div>
                                        <div className="infos-case">
                                        <div>Nom : kobo </div>
                                        <div>prenom : yoyo </div>
                                        <div>Ville : Paris </div>
                                        <div>Role : Gérant des services technique</div>
                                </div>
                                </div>
                                <button>Voir informations</button>
                                <button>Enlever sa fonction d admin</button>
                            </div>
                    </div>
                    <div className="adminpageuser">
                        <div className="list-user-admin"><h2>Liste des utilisateurs de la ville : </h2></div>
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
                                <button>Enleever sa fonction d admin</button>
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
                                <button>Enleever sa fonction d admin</button>
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
