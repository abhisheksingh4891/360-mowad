import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Components/Logo';
import c1 from "../Assets/c4.jpg";
import Helpdesk from '../Components/Helpdesk';
import MyProfile from '../Components/MyProfile';
import LatestUpdates from '../Components/LatestUpdates';
import SchemeProvided from '../Components/SchemeProvided';
import SchemeDesc from '../Components/SchemeDesc';

const StudentPage = () => {
  
  return (
    <div className="container-fluid pt-3" style={{ backgroundImage: `url(${c1})` , backgroundSize: 'cover', backgroundPosition: 'center', filter:'brightness(80%)', fontFamily:'Raleway'}}>
      <Logo />
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-1 mx-3">
        <div className="container-fluid" style={{ fontFamily: 'Raleway' }}>
          <Link className="navbar-brand fs-6" to="/">HOME</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/about">ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">CONTACT US</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">LOGOUT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
      <div className="row mx-1 mt-5">
        <div className="col-md-4 pb-3">
          <MyProfile />
          <Helpdesk />
        </div>
        <div className="col-md-4 pb-3">
          <SchemeProvided />
        </div>
        <div className="col-md-4">
          <LatestUpdates />
          <SchemeDesc />
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
