import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function UserList() {
    const [users, setUsers] = useState([]);
    const [userSize, setUserSize] = useState(users.length);
    const [name, setName] = useState('Alla');

    let prenom = "Moussa";
    let ageAttributeName = "ages";
    let personne = { prenom, "nom": "Moussa", [ageAttributeName]: 20 }

    const loadUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((reponse) => {
                setUsers(reponse.data);
            }).catch((error) => {
                console.error(error);
            }).finally(() => {
                console.log("appel de web service terminé...");
            });
    }

    useEffect(() => {
        loadUsers();
    }, []);

    useEffect(() => {
        setUserSize(users.length);
    }, [users]);

    const removeUser = (userToRemove) => {
        const newUsers = users.filter(user => user.id != userToRemove.id);
        setUsers(newUsers);
    }

    const handleNameInputChange = ($event) => {
        console.log($event.target.value);
        setName($event.target.value);
    }

    const save = () => {
        setUsers([{ id: Math.random(), name }, ...users]);
        setName('');
    }

    return <div>
        <h1>Nombre d'utilisateurs : {userSize}</h1>
        <ul>
            <li>
                <div className="row">
                    <div className="col-4 pe-0">
                        <input value={name} onChange={handleNameInputChange} className="form-control form-control-lg" />
                    </div>
                    <div className="col-4 ps-0">
                        <button onClick={save} className="btn btn-primary btn-lg">Ajouter</button>
                    </div>
                    <div className="col-12">
                        Nom: {name}
                    </div>
                    <hr className="my-3" />
                </div>
            </li>
            {users.map(user => <li className="py-4 d-flex justify-content-between" key={user.id}>{user.name} <button onClick={() => removeUser(user)}>x</button>
                &nbsp; <Link to={`/user/${user.id}`}><Button size="sm">Afficher</Button></Link>
            </li>)}
        </ul>
        <button onClick={() => setUserSize(userSize + 1)}>Mettre à jour le nombre de user</button>
    </div>
}