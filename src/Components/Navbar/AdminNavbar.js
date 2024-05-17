import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../../Context/AppContext';

const AdminNavbar = () => {

  const { setAdminLogin } = useContext(AppContext);

  const navigate = useNavigate(); 

  const handleLogout = () => {
    setTimeout(() => {
      localStorage.removeItem("AdminToken");
      navigate('/adminlogin');
    }, 800);
    setAdminLogin(false);
  };

  return (
    <div><nav className="navbar navbar-expand-lg navbar-dark bg-dark p-1 mx-3">
    <div className="container-fluid" style={{ fontFamily: 'Raleway' }}>
      
      <div className="collapse navbar-collapse" id="navbarNavadmin">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/about">ABOUT US</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./">NGOs</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./">TRAINEES</Link>
          </li>
        </ul>
      </div>
      <Link className="navbar-brand fs-6" onClick={handleLogout}>LOGOUT</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavadmin" aria-controls="navbarNavadmin" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav></div>
  )
}

export default AdminNavbar;