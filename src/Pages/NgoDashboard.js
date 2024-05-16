import React, { useContext } from 'react';
import c1 from "../Assets/c4.jpg";
import Helpdesk from '../Components/Helpdesk';
import MyProfile from '../Components/MyProfile';
import NgoNavbar from '../Components/Navbar/NgoNavbar';
import { AppContext } from '../Context/AppContext';
import NgoLogin from './Login/NgoLogin';


const NgoDashboard = () => {

  const {ngoLogin} = useContext(AppContext);

  return (
    <>
    {
      ngoLogin ? (
        <div className="container-fluid pt-3" style={{ backgroundImage: `url(${c1})` , backgroundSize: 'cover', backgroundPosition: 'center', filter:'brightness(80%)', fontFamily:'Raleway'}}>
          <div className="text-center p-1 pb-2 text-white">
            <h4>Non Governmental Organizations (NGOs)</h4>
          </div>
        <div>
          <NgoNavbar />
        </div>
          <div className="row mx-1 mt-5">
            <div className="col-md-4 pb-3">
              <MyProfile />
              <Helpdesk />
            </div>
            <div className="col-md-4 pb-3">
              {/* <SchemeProvided /> */}
            </div>
            <div className="col-md-4">
              {/* <LatestUpdates />
              <SchemeDesc /> */}
            </div>
          </div>
        </div>
      ):(
        <NgoLogin />
      )
    }
    </>
  )
}

export default NgoDashboard;