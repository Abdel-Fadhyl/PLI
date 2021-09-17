import React from 'react'
import { useContext } from 'react'
import { myContext } from './Context'


export default function Homepage() {
    const ctx = useContext(myContext);
    console.log(ctx);
    return (
        <div className="test">
            <h1>bienvenu a problem city</h1>
            <div className="adminpagepb">
                    <div className="list-pb-admin"><h2>Liste des problemes à régler :</h2></div>

                        <div className="firstpb"> 
                            <div className="infopb">
                                <div className="image-pb-admin" id="1"></div>
                                <div className="infos-case">
                                    <div>Nom : Trou dans la route </div>
                                    <div>publie par : Marie </div>
                                    <div>Ville : Marly </div>
                                    <div>Description : ce trou est la depuis une semaine </div>
                                </div>
                            </div>
                        </div>

                        <div className="firstpb"> 
                        <div className="infopb">
                            <div className="image-pb-admin" id="1"></div>
                            <div className="infos-case">
                                <div>Nom : Lampadaire cassee </div>
                                <div>publie par : Paul </div>
                                <div>Ville : Paris </div>
                                <div>Description : cette ruelle est sombre depuis plusieurs mois</div>
                            </div>
                            </div>
                            
                        </div>
                        <div className="firstpb"> 
                        <div className="infopb">
                            <div className="image-pb-admin" id="1"></div>
                            <div className="infos-case">
                                <div>Nom : Bouche d'égout </div>
                                <div>publie par : Joe </div>
                                <div>Ville : Paris </div>
                                <div>Description : ce trou est la depuis une semaine. Mon chat a failli tombé dedans</div>
                            </div>
                            </div>
                            
                        </div>
                        <div className="firstpb"> 
                        <div className="infopb">
                            <div className="image-pb-admin" id="1"></div>
                            <div className="infos-case">
                                <div>Nom : Bouche d'égout </div>
                                <div>publie par : Joe </div>
                                <div>Ville : Paris </div>
                                <div>Description : ce trou est la depuis une semaine. Mon chat a failli tombé dedans</div>
                            </div>
                            </div>
                            
                        </div>
                </div>
        </div>
    )
}
