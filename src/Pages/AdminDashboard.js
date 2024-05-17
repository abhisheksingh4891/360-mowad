import React, { useContext } from 'react';
import c1 from "../Assets/c2.jpg";
import Helpdesk from '../Components/Helpdesk';
import MyProfile from '../Components/MyProfile';
import Logo from '../Components/Logo';
import AdminNavbar from '../Components/Navbar/AdminNavbar';
import AdminLogin from './Login/AdminLogin';
import { AppContext } from '../Context/AppContext';


const AdminDashboard = () => {

  const { adminLogin } = useContext(AppContext);

  return (
    <>
      {
        adminLogin ? (
          <div className="container-fluid pt-3" style={{ backgroundImage: `url(${c1})` , backgroundSize: 'cover', backgroundPosition: 'center', filter:'brightness(80%)', fontFamily:'Raleway', height:'100vh'}}>
            <Logo />  
            <div>
            <AdminNavbar />
            </div>
            <div className="row mx-1 mt-5">
              <div className="col-md-4 pb-3">
                <MyProfile />
                <Helpdesk />
              </div>
            </div>
          </div>
        ):(
          <AdminLogin />
        )
      }
    </>
  )
}

export default AdminDashboard;