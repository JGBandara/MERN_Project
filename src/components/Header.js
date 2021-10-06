import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
return(
    
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#" style={{color:"purple",fontStyle:"bold",fontSize:"30px"}}>Society Mangement System</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        
                        <Link to="/" className="nav-link" >Home</Link>
                    </li>
                    <li className="nav-item active">
                    
                    <Link to="/add" className="nav-link">Create Member</Link>
                    </li>
                    <li className="nav-item active">
                    
                    <Link to="/delete" className="nav-link">Delete Member</Link>
                    </li>
                    <li className="nav-item active">
                    
                    <Link to="/edit" className="nav-link"> Edit details</Link>
                    </li>
                </ul>
            </div>
  
        </nav> 
    )
}

export default Header;

