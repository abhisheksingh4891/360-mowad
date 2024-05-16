import {React, useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../Components/Logo';
import bg1 from '../../Assets/c4.jpg';
import axios from 'axios';
import { AppContext } from '../../Context/AppContext';

const baseURL = "http://localhost:1000";

const NgoLogin = () => {

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const { setNgoLogin } = useContext(AppContext);

  const navigate = useNavigate();

  const Submit = (e)=> {
    e.preventDefault();
    axios.post(`${baseURL}/ngouserlogin`,
    {
      email, password
    })
    .then(() => {
      localStorage.setItem("NgoLoggedIn", true);
      setNgoLogin(true)
      alert("Login Successfull")
      navigate("/ngodashboard");
    })
    .catch(err => console.log(err));
    // navigate("/modal");
  }
  
  

  return (
    <div className="container-fluid py-3 pb-5" style={{ backgroundImage: `url(${bg1})` , backgroundSize: 'cover', backgroundPosition: 'center', filter:'brightness(80%)', height: '100vh'}}>
    <div className='mt-3'>
      <Logo/>
    </div>        
    <div className="row d-flex justify-content-center align-items-center mt-5 p-3">
      <div className="col col-xl-6">
        <div className="" style={{ borderRadius: "1rem", backgroundColor: 'rgba(255, 255, 255, 0.5)'}}> 
          <div className="row g-0">
            
              <div className="card-body p-4 p-lg-5 text-black">

                <form onSubmit={Submit} style={{fontFamily:'Raleway'}}>

                  <h5 className="mb-3 pb-1 fw-bold" style={{"letterSpacing": "1px"}}><u>Non Governmental Organizations (NGOs)</u></h5>

                  <div className="form-outline mb-4">
                    <label className="form-label text-black fw-bold" htmlFor="form2Example25">Username</label>
                    <input required type="text" id="form2Example25" className="form-control" onChange={(e)=>{setEmail(e.target.value)}} name="email" value={email}/>
                  </div>


                  <div className="form-outline mb-4">
                    <label className="form-label text-black fw-bold" htmlFor="form2Example21">Password</label>
                    <input required type="password" id="form2Example21" className="form-control" onChange={(e)=>{setPassword(e.target.value)}} name="password" value={password}/>
                  </div>

                  
                    <div className="pt-2 mb-4">
                      <button className="btn btn-success btn-block" type="submit">Log in</button>
                    </div>
                  
                  <p className="mb-2 text-black fw-bold" style={{"color": "blue"}}>Don't have a account? <Link to="/ngoregister"className="" style={{"color": "blue"}}>Register here</Link></p>

                  <Link className="text-danger fw-bold" to="/">Return to Home</Link>
                </form>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default NgoLogin;