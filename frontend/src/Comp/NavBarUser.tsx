import React from 'react';
import "./SideBar.css";
import { SideBar } from "./SideBar";
import { Link } from 'react-router-dom';

function NavBarUser() {
    return (
        <div className="SideBar">
        <ul className="SideBarList">
        {SideBar.map((val,key) => { 
            return (
                <li key={key}
                className="row" 
                id={window.location.pathname === val.Link ? "active" : ""}
                onClick={()=> {
                    window.location.pathname = val.Link;
                    }}
                    > 
                {" "}
                <div id="icon">{val.icon}</div>{" "}<div id="title">{val.title}</div>
                </li>
            );
    })}
    </ul>
    <Link to="/Users"></Link>
    <Link to="/Users+Mairie+City"></Link>
    <Link to="/ProblemsOK"></Link>
    <Link to="/Problems+to+be+resolved"></Link>
    <Link to="/allProblemes"></Link>
    </div>
    );
}

export default NavBarUser;