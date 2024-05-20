import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../../Context/AppContext';

const NgoNavbar = () => {

  const { setNgoLogin } = useContext(AppContext);

  const navigate = useNavigate(); 

  const handleLogout = () => {
    setTimeout(() => {
      localStorage.removeItem("NgoToken");
      navigate('/ngologin');
    }, 800);
    setNgoLogin(false);
  };

  return (
    <div><nav className="navbar navbar-expand-lg navbar-dark bg-dark p-1 mx-3">
    <div className="container-fluid" style={{ fontFamily: 'Raleway' }}>
      <Link className="navbar-brand fs-6"  to="./">REGISTER</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavngo" aria-controls="navbarNavngo" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavngo">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="./">CRITERIA</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./">ORGANIZATIONS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./">FUNDING NORMS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./">STATUS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./">FAQ</Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link" onClick={handleLogout}>LOGOUT</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav></div>
  )
}

export default NgoNavbar;