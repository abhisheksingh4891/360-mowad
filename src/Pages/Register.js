import {React, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Components/Logo';
import bg1 from '../Assets/bg3.jpg'

const Register = () => {

  const [fname, setName] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [state, setState] = useState('');
  const [icode, setIcode] = useState('');
  const [aadhar, setAadhar] = useState('');


  const navigate = useNavigate();

  const Submit = (e)=> {
    e.preventDefault();
    navigate("/modal");
  }

  

  return (
    <div className="container-fluid py-3 pb-5" style={{ backgroundImage: `url(${bg1})` , backgroundSize: 'cover', backgroundPosition: 'center', filter:'brightness(80%)'}}>
    <div className='mt-3'>
      <Logo/>
    </div>        
    <div className="row d-flex justify-content-center align-items-center mt-3">
      <div className="col col-xl-6">
        <div className="" style={{ borderRadius: "1rem", backgroundColor: 'rgba(255, 255, 255, 0.7)'}}> 
          <div className="row g-0">
            <div className="card-body p-4 p-lg-5 text-black">

                <form onSubmit={Submit} style={{fontFamily:'Raleway'}}>
                

                  <h5 className="mb-3 pb-1 fw-bold" style={{"letterSpacing": "1px"}}><u>Sign Up into your account</u></h5>
                  
                  <div className="form-outline mb-4">
                    <label className="form-label text-black fw-bold" htmlFor="form2Example17">Name</label>
                    <input required type="text" id="form2Example17" className="form-control" onChange={(e)=>{setName(e.target.value)}} name="fname" value={fname}/>
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label text-black fw-bold" htmlFor="form2Example18">Gender</label>
                    <select className="form-select" onChange={(e) => setGender(e.target.value)} value={gender}>
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label text-black fw-bold" htmlFor="form2Example19">Mobile Number</label>
                    <input required type="number" id="form2Example19" className="form-control form-control"  onChange={(e)=>{setPhone(e.target.value)}} name="phone" value={phone}/>
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label text-black fw-bold" htmlFor="form2Example20">Email address</label>
                    <input required type="email" id="form2Example20" className="form-control" onChange={(e)=>{setEmail(e.target.value)}} name="email" value={email}/>
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label text-black fw-bold" htmlFor="form2Example23">State Domicile</label>
                    <input required type="text" id="form2Example23" className="form-control" onChange={(e)=>{setState(e.target.value)}} name="email" value={state}/>
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label text-black fw-bold" htmlFor="form2Example24">Institute Code</label>
                    <input required type="number" id="form2Example24" className="form-control" onChange={(e)=>{setIcode(e.target.value)}} name="email" value={icode}/>
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label text-black fw-bold" htmlFor="form2Example25">Aadhar Number</label>
                    <input required type="number" id="form2Example25" className="form-control" onChange={(e)=>{setAadhar(e.target.value)}} name="email" value={aadhar}/>
                  </div>


                  <div className="form-outline mb-4">
                    <label className="form-label text-black fw-bold" htmlFor="form2Example21">Password</label>
                    <input required type="password" id="form2Example21" className="form-control" onChange={(e)=>{setPassword(e.target.value)}} name="password" value={password}/>
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label text-black fw-bold" htmlFor="form2Example22">Confirm Password</label>
                    <input required type="password" id="form2Example22" className="form-control" onChange={(e)=>{setConfirmPassword(e.target.value)}} name="confirmPassword" value={confirmPassword}/>
                  </div>

                  <div className="d-flex gap-2 mb-2">
                  <input required type="checkbox"/>
                  <a href="#!" className="small text-black text-decoration-none text-dark fw-bold">I agree for Terms and Conditions</a>
                  </div> 

                  <div className="pt-2 mb-4 d-flex gap-4">
                    <Link to="/modal"><button className="btn btn-success btn-block" type="submit">Register</button></Link>
                    <button className="btn btn-success btn-block" type="submit">Reset</button>
                  </div>

                  <p className="mb-2 text-black fw-bold" style={{"color": "blue"}}>Already have an account? <Link to="/login"className="" style={{"color": "blue"}}>Login here</Link></p>

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

export default Register