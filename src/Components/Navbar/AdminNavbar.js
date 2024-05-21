import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../../Context/AppContext';

const AdminNavbar = () => {

  const { setAdminLogin } = useContext(AppContext);

  const navigate = useNavigate(); 

  const handleLogout = () => {
    setTimeout(() => {
      localStorage.removeItem("AdminToken");
      navigate('/');
    }, 800);
    setAdminLogin(false);
  };

  return (
    <div><nav className="navbar navbar-expand-lg navbar-dark bg-dark p-1 mx-3">
    <div className="container-fluid" style={{ fontFamily: 'Raleway' }}>
      <Link  className="navbar-brand fs-6" to="/">HOME</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavadmin" aria-controls="navbarNavadmin" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarNavadmin">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link  className="nav-link" to="/about">ABOUT US</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./">NGOs</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./">TRAINEES</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={handleLogout}>LOGOUT</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav></div>
  )
}

export default AdminNavbar;