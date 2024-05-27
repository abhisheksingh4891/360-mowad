import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../../Context/AppContext';

const StepNavbar = () => {

  const { setStepLogin } = useContext(AppContext);

  const navigate = useNavigate(); 

  const handleLogout = () => {
    setTimeout(() => {
      localStorage.removeItem("StepToken");
      navigate('/steplogin');
    }, 800);
    setStepLogin(false);
  };

  return (
    <div><nav className="navbar navbar-expand-lg navbar-dark bg-dark p-1 mx-3">
    <div className="container-fluid" style={{ fontFamily: 'Raleway' }}> 
      <Link className="navbar-brand fs-6" to="/">HOME</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavv" aria-controls="navbarNavv" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavv">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/about">ABOUT US</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./">GUIDELINES</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./">TRAINING SECTORS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./">NGOs</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/apply">REGISTERATION</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./">STATUS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./">FAQ</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " onClick={handleLogout}>LOGOUT</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav></div>
  )
}

export default StepNavbar
