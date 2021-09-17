import React from 'react';
import './style/Problems.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CheckIcon from '@material-ui/icons/Check';

const HStyle = { weight: '200px', height: '200px' };

function ProblemsOK () {
    return (
        <div className="global">
        <header>
            <h2>Problemes resolu <ThumbUpIcon /></h2>
        </header>
        <div className="Problems">
            <div className="all">
            <img alt="ProblemsResolu" className="img" style={ HStyle }/>
            <div className="over">
            <p>Titre : Trou dans la route </p>
            <p>Publié par : Marie </p>
            <p>Publié le : 01/01/2021</p>
            <p>Ville : Ivry-Sur-Seine </p>
            <p>Description : ce trou est la depuis une semaine </p>
            <p><CheckIcon /></p>
            </div>
            </div>
            <div className="all">
            <img alt="ProblemsResolu" className="img" style={ HStyle }/>
            <div className="over">
            <p>Titre : Trou dans la route </p>
            <p>Publié par : Marie </p>
            <p>Publié le : 12/01/2021</p>
            <p>Ville : Ivry-Sur-Seine </p>
            <p>Description : ce trou est la depuis une semaine </p>
            <p><CheckIcon /></p>
            </div>
            </div>
            <div className="all">
            <img alt="ProblemsResolu" className="img" style={ HStyle }/>
            <div className="over">
            <p>Titre : Trou dans la route </p>
            <p>Publié par : Marie </p>
            <p>Publié le : 24/01/2021</p>
            <p>Ville : Ivry-Sur-Seine </p>
            <p>Description : ce trou est la depuis une semaine </p>
            <p><CheckIcon /></p>
            </div>
            </div>
            <div className="all">
            <img alt="ProblemsResolu" className="img" style={ HStyle }/>
            <div className="over">
            <p>Titre : Trou dans la route </p>
            <p>Publié par : Marie </p>
            <p>Publié le : 09/02/2021</p>
            <p>Ville : Ivry-Sur-Seine </p>
            <p>Description : ce trou est la depuis une semaine </p>
            <p><CheckIcon /></p>
            </div>
            </div>
            <div className="all">
            <img alt="ProblemsResolu" className="img" style={ HStyle }/>
            <div className="over">
            <p>Titre : Trou dans la route </p>
            <p>Publié par : Marie </p>
            <p>Publié le : 20/02/2021</p>
            <p>Ville : Ivry-Sur-Seine </p>
            <p>Description : ce trou est la depuis une semaine </p>
            <p><CheckIcon /></p>
            </div>
            </div>
        </div>
        <div className="Problems2">
        <div className="all">
            <img alt="ProblemsResolu" className="img" />
            <div className="over">
            <p>Titre : Trou dans la route </p>
            <p>Publié par : Marie </p>
            <p>Publié le : 01/01/2021</p>
            <p>Ville : Ivry-Sur-Seine </p>
            <p>Description : ce trou est la depuis une semaine </p>
            <p><CheckIcon /></p>
            </div>
            </div>
            <div className="all">
            <img alt="ProblemsResolu" className="img" />
            <div className="over">
            <p>Titre : Trou dans la route </p>
            <p>Publié par : Marie </p>
            <p>Publié le : 12/01/2021</p>
            <p>Ville : Ivry-Sur-Seine </p>
            <p>Description : ce trou est la depuis une semaine </p>
            <p><CheckIcon /></p>
            </div>
            </div>
            <div className="all">
            <img alt="ProblemsResolu" className="img" style={ HStyle }/>
            <div className="over">
            <p>Titre : Trou dans la route </p>
            <p>Publié par : Marie </p>
            <p>Publié le : 24/01/2021</p>
            <p>Ville : Ivry-Sur-Seine </p>
            <p>Description : ce trou est la depuis une semaine </p>
            <p><CheckIcon /></p>
            </div>
            </div>
            <div className="all">
            <img alt="ProblemsResolu" className="img" style={ HStyle }/>
            <div className="over">
            <p>Titre : Trou dans la route </p>
            <p>Publié par : Marie </p>
            <p>Publié le : 09/02/2021</p>
            <p>Ville : Ivry-Sur-Seine </p>
            <p>Description : ce trou est la depuis une semaine </p>
            <p><CheckIcon /></p>
            </div>
            </div>
            <div className="all">
            <img alt="ProblemsResolu" className="img" />
            <div className="over">
            <p>Titre : Trou dans la route </p>
            <p>Publié par : Marie </p>
            <p>Publié le : 20/02/2021</p>
            <p>Ville : Ivry-Sur-Seine </p>
            <p>Description : ce trou est la depuis une semaine </p>
            <p><CheckIcon /></p>
            </div>
            </div>
        </div>
        
    </div>
    )
}

export default ProblemsOK;