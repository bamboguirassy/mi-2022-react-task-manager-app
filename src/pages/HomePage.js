import axios from "axios";
import React, { useEffect } from "react";

export default function HomePage() {
    useEffect(()=>{
    axios.get('https://api.sofascore.com/api/v1/sport/football/scheduled-events/2023-03-18')
    .then((reponse)=>console.dir(reponse.data.events))
    .catch((error)=>console.error(error));
    },[]);
    return <div>Bienvenue sur la page d'accueil</div>
}