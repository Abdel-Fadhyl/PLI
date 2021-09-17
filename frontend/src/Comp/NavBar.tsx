import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../Pages/Context';
import Axios from 'axios';
import HomeIcon from '@material-ui/icons/Home';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import logo  from '../Pages/img/logo_large.png';

export default function NavBar() { //1/02/50
    const ctx = useContext(myContext);
    
    const logout = () => {
        Axios.get("http://localhost:4000/logout", {
            withCredentials: true
        }).then((res) => {
            console.log(res)
        })
    }

    return (
        <div className="NavContainer">
                    <img src={logo} alt="moi"/>
            { ctx ? (
                <>
                    <Link to="/adminmaire"><HomeIcon  />Home</Link>
                    <Link to="/login"><VpnKeyOutlinedIcon />Login</Link>
                    <Link to="/register"><LockOpenOutlinedIcon />Register</Link>
                    <Link onClick={logout} to="/logout"><ExitToAppOutlinedIcon />Logout</Link>
                </>
              ) : (
                <>
                    <Link onClick={logout} to="/logout">Logout</Link>
                    { ctx.isAdmin ? (<Link to="/admin">Admin</Link>) : null}
                    <Link to="/adminmaire">AdminMaire</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/adminemploye">Adminemploye</Link>
                </>
            )
            }   
        </div>
    )
}
