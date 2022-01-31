import React from "react";
import axios from 'axios';
import { useEffect ,useState} from "react/cjs/react.development";
import UserList from '../components/UserList'

const Users=()=>{
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            console.log(res.data)
            setUsers(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    useEffect(()=>{
        console.log(users)
    },[users])
    return(
        <div>
        <h1>Users</h1>
        <UserList users={users}></UserList>
        </div>
    )
}

export default Users