import React from "react";
import {Link} from 'react-router-dom'

const UserList=(props)=>{
    return (
        <div>
        <h1>
            UserList</h1>
            {props.users.map(user=>{
                return(
                    <div class="card" key={user.id}>
                        <div class="card-body">
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                        </div>
                    </div>
                )
            })}
            </div>
    );
};

export default UserList;