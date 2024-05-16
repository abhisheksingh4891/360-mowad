import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Logo from '../Components/Logo';
import c1 from "../Assets/c2.jpg";
import Description from '../Components/Description';
import Eligibility from '../Components/Eligibility';

const Homepage = () => {

  return (
    <div className="container-fluid pt-3" style={{ backgroundImage: `url(${c1})` , backgroundSize: 'cover', backgroundPosition: 'center', filter:'brightness(8`0%)', fontFamily:'Raleway'}}>
      <Logo />
      <Navbar />
      <div className="row mx-1 mt-5">
          <Description />
          <Eligibility />     
      </div>
    </div>
  );
};

export default Homepage;
