import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../../Context/AppContext';

const NgoNavbar = () => {

  const { setNgoLogin } = useContext(AppContext);

  const navigate = useNavigate(); 

  const handleLogout = () => {
    setTimeout(() => {
      localStorage.removeItem("NgoLoggedIn");
      navigate('/');
    }, 800);
    setNgoLogin(false);
  };

  return (
    <div><nav className="navbar navbar-expand-lg navbar-dark bg-dark p-1 mx-3">
    <div className="container-fluid" style={{ fontFamily: 'Raleway' }}>
      <div className="collapse navbar-collapse" id="navbarNavngo">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/about">CRITERIA</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">ORGANIZATIONS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">FUNDING NORMS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">REGISTER</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">STATUS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">FAQ</Link>
          </li>
        </ul>
      </div>
      <Link className="navbar-brand fs-6" onClick={handleLogout}>LOGOUT</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavngo" aria-controls="navbarNavngo" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav></div>
  )
}

export default NgoNavbar;