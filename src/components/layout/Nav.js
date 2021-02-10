import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Logout from "../auth/Logout";
import Navbar from "react-bootstrap/Navbar";


function Nav() {
    
    const { user } = useContext(AuthContext);
    
    return (
        
        
            <Navbar className="Nav" expand="lg">
                <NavLink className="Nav__link" to="/" exact>Home</NavLink>
                <NavLink className="Nav__link" to="/contact">Contact</NavLink>
                <NavLink className="Nav__link" to="/hotel">Hotel</NavLink>
                <NavLink className="Nav__link" to="/enquiry">Enquiry</NavLink>
            
    
                {user ? (
                    <>
                        <NavLink to="/admin"></NavLink>
                        <Logout />
        
                    </>
                ) : (
                    <NavLink to="/register" className="Nav__link">Login/Admin</NavLink>
                )}

            </Navbar>
    );
}

export default Nav;

