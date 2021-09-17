import React from 'react';
import FaceIcon from '@material-ui/icons/Face';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import AppsIcon from '@material-ui/icons/Apps';

export const SideBar = [
    {
        title: "les problèmes",
        icon: <AppsIcon />,
        Link: "/allProblemes",
    },
    {
        title: "les problèmes à régler",
        icon: <ThumbDownAltIcon />,
        Link: "/Problems+to+be+resolved",
    },
    {
        title: "les problèmes résolu",
        icon: <ThumbUpIcon />,
        Link: "/ProblemsOK",
    },
    {
        title: "les utilisateurs",
        icon: <FaceIcon />,
        Link: "/Users",
    },
    {
        title: "les utilisateurs Mairie",
        icon: <FaceIcon />,
        Link: "/Users+Mairie+City",
    }
]

export default SideBar;