import React from "react";
import axios from 'axios';
import { useEffect ,useState} from "react/cjs/react.development";
import UserList from '../components/UserList'
import { useParams } from "react-router-dom";
const User=()=>{
    const {id}=useParams();
    const [user,setUser]=useState(null);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users/'+id)
        .then((res)=>{
            console.log(res.data)
            setUser(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
 

    useEffect(()=>{
        console.log(user)
    },[user])
    return(
        <div>
        <h1>User정보</h1>
        <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
        </div>
    )
}

export default User