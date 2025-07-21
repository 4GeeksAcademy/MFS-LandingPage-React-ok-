
import React from "react";

//create your first component
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg d-flex mb-3" style={{backgroundColor : 'black'}}>
  <div className="container-fluid" style={{maxWidth: '1320px'}}>
    <a className="navbar-brand" href="#" style={{color : 'white'}}>Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link" href="#" style={{color : 'white'}}>Home</a>
        <a className="nav-link" href="#" style={{color : 'grey'}}>Aboutt</a>
        <a className="nav-link" href="#" style={{color : 'grey'}}>Services</a>
        <a className="nav-link" href="#" style={{color : 'grey'}}>Contact</a>
      </div>
    </div>
  </div>
</nav>
    );
  };
export default Navbar;