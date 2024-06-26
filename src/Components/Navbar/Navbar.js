import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';


const Navbar = () => {
  const { stepLogin, ngoLogin, adminLogin } = useContext(AppContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-1 mx-3">
        <div className="container-fluid" style={{ fontFamily: 'Raleway' }}>
          <Link className="navbar-brand fs-6" to="/">HOME</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/about">ABOUT US</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/policy">LEGISLATIONS & POLICY</Link>
                </li>
                {
                  stepLogin ? (
                    <li className="nav-item">
                      <Link className="nav-link" to="/stepdashboard">STEP</Link>
                    </li>
                  ):(
                    <li className="nav-item">
                      <Link className="nav-link" to="/steplogin">STEP</Link>
                    </li>
                  )
                }
                {
                  ngoLogin ? (
                    <li className="nav-item">
                      <Link className="nav-link" to="/ngodashboard">NGOs</Link>
                    </li>
                  ):(
                    <li className="nav-item">
                      <Link className="nav-link" to="/ngologin">NGOs</Link>
                    </li>
                  )
                }
                {
                  adminLogin ? (
                    <li className="nav-item">
                      <Link className="nav-link" to="/admindashboard">ADMIN</Link>
                    </li>
                  ):(
                    <li className="nav-item">
                      <Link className="nav-link" to="/adminlogin">ADMIN</Link>
                    </li>
                  )
                }
                {/* <li className="nav-item">
                  <Link className="nav-link" to="./">FAQ</Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">CONTACT US</Link>
                </li>
              </ul>
            </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
