import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UserDetails() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const gotoNext = ()=>{navigate
        (`/user/${Number.parseInt(id)+1}`);
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((reponse) => {
                setUser(reponse.data);
            }).catch(error => console.error(error));
    },[id]);
    
    return <><h1>{user?.name}</h1>
    <button onClick={gotoNext}>Aller au suivant</button>
    </>;
}