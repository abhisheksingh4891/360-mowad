import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Logo from '../Components/Logo';
import c1 from "../Assets/c2.jpg";
import Description from '../Components/Description';
import Eligibility from '../Components/Eligibility';
import Footer from '../Components/Footer';

const Homepage = () => {

  return (
    <div className="container-fluid pt-3" style={{ backgroundImage: `url(${c1})` , backgroundSize: 'cover', backgroundPosition: 'center', filter:'brightness(80%)', fontFamily:'Raleway'}}>
      <Logo />
      <Navbar />
      <div className="row mx-1 mt-5">
          <Description />
          <Eligibility /> 
          <Footer />    
      </div>
    </div>
  );
};

export default Homepage;
