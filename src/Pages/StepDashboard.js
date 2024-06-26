import React, { useContext } from 'react';
import c1 from "../Assets/bg5.jpg";
import Helpdesk from '../Components/Helpdesk';
import StepNavbar from '../Components/Navbar/StepNavbar';
import { AppContext } from '../Context/AppContext';
import StepLogin from './Login/StepLogin';
import StepProfile from '../Components/Profile/StepProfile';

const StepDashboard = () => {

  const { stepLogin } = useContext(AppContext);

  return (
    <>
    {
      stepLogin ? (
        <div className="container-fluid pt-3" style={{ backgroundImage: `url(${c1})` , backgroundSize: 'cover', backgroundPosition: 'center', filter:'brightness(80%)', fontFamily:'Raleway', height:'100vh'}}>
      <div className="text-center p-1 pb-2 text-white">
            <h4>Support to Training and Employment Programme for Women (STEP) </h4>
        </div>
      <div>
      <StepNavbar />
      </div>
        <div className="row mx-1 mt-5">
          <div className="col-md-4 pb-3">
            <StepProfile />
            <Helpdesk />
          </div>
        </div>
      </div>
      ):(
        <StepLogin />
      )
    }
      
    </>
    
  )
}

export default StepDashboard