import React  from "react";
import{
    Link,NavLink
    
   } from 'react-router-dom'

const Navbar=()=>{
 return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">Home</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className=" nav-link " to="/movies">Movies <span className="sr-only"></span></NavLink>
        <NavLink className=" nav-link" to="/users">Users</NavLink>
     
      </div>
    </div>
  </nav>

 )

 
}

export default Navbar;