import {React, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../Components/Logo';
import bg1 from '../../Assets/c4.jpg'
import axios from "axios";
import { Modal, Button } from 'react-bootstrap';

const baseURL = "https://three60-mowad-backend.onrender.com";
// const baseURL = "http://localhost:1000";

const StepRegister = () => {

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const [showFetchingModal, setShowFetchingModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showPErrorModal, setShowPErrorModal] = useState(false);

  const handleCloseFetching = () => setShowFetchingModal(false);
  const handleShowFetching = () => setShowFetchingModal(true);

  const handleShowSuccess = () => {
    setShowSuccessModal(true);
    setTimeout(() => {
      setShowSuccessModal(false);
      navigate('/ngologin');
    }, 1000);

  }

  const handleCloseError = () => setShowErrorModal(false);
  const handleShowError = () => setShowErrorModal(true);

  const handleShowPError = () => setShowPErrorModal(true);
  const handleClosePError = () => setShowPErrorModal(false);

  const validatePasswords = () => {
    if (password !== confirmPassword) {
      handleShowPError();
      return false;
    }
    return true;
  };

  const Submit = (e)=> {
    e.preventDefault();
    if (!validatePasswords()) {
      return;
    }

    handleShowFetching();
    axios.post(`${baseURL}/api/ngo/user/register`,{
      name, phone, email, password, gender, confirmPassword
    })
    .then(() => {
      handleCloseFetching();
      handleShowSuccess();
    })
    .catch(err => {
      console.log(err)
      handleCloseFetching();
      handleShowError();
  });
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
                

                  <h5 className="mb-3 pb-1 fw-bold" style={{"letterSpacing": "1px"}}><u>Non Governmental Organizations (NGOs)</u></h5>
                  
                  <div className="form-outline mb-4">
                    <label className="form-label text-black fw-bold" htmlFor="form2Example17">Name</label>
                    <input required type="text" id="form2Example17" className="form-control" onChange={(e)=>{setName(e.target.value)}} name="name" />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label text-black fw-bold" htmlFor="form2Example18">Gender</label>
                    <select className="form-select" onChange={(e) => setGender(e.target.value)} >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label text-black fw-bold" htmlFor="form2Example19">Mobile Number</label>
                    <input required type="number" id="form2Example19" className="form-control form-control"  onChange={(e)=>{setPhone(e.target.value)}} name="phone" />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label text-black fw-bold" htmlFor="form2Example20">Email address</label>
                    <input required type="email" id="form2Example20" className="form-control" onChange={(e)=>{setEmail(e.target.value)}} name="email" />
                  </div>


                  <div className="form-outline mb-4">
                    <label className="form-label text-black fw-bold" htmlFor="form2Example21">Password</label>
                    <input required type="password" id="form2Example21" className="form-control" onChange={(e)=>{setPassword(e.target.value)}} name="password" />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label text-black fw-bold" htmlFor="form2Example22">Confirm Password</label>
                    <input required type="password" id="form2Example22" className="form-control" onChange={(e)=>{setConfirmPassword(e.target.value)}} name="confirmPassword" />
                  </div>

                  <div className="d-flex gap-2 mb-2">
                  <input required type="checkbox"/>
                  <a href="#!" className="small text-black text-decoration-none text-dark fw-bold">I agree for Terms and Conditions</a>
                  </div> 

                  <div className="pt-2 mb-4 d-flex gap-4">
                    <button className="btn btn-success btn-block" type="submit">Register</button>
                    <button className="btn btn-success btn-block" type="submit">Reset</button>
                  </div>

                  <p className="mb-2 text-black fw-bold" style={{"color": "blue"}}>Already have an account? <Link to="/steplogin"className="" style={{"color": "blue"}}>Login here</Link></p>

                  <Link className="text-danger fw-bold" to="/">Return to Home</Link>
                </form>
              </div>
            </div>
        </div>
      </div>
    </div>
    
    <Modal show={showFetchingModal} onHide={handleCloseFetching}>
        <Modal.Header closeButton>
          <Modal.Title>Sending User Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please wait while we send your profile data...</Modal.Body>
      </Modal>

      <Modal show={showPErrorModal} onHide={handleClosePError}>
        <Modal.Header closeButton>
          <Modal.Title>Password Incorrect</Modal.Title>
        </Modal.Header>
        <Modal.Body>Both Password and Confirm Password shoul be same...</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClosePError}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showSuccessModal} onHide={handleCloseError}>
        <Modal.Header closeButton>
          <Modal.Title>Registeration Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>You have successfully Registered!</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleCloseError}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      
      <Modal show={showErrorModal} onHide={handleCloseError}>
        <Modal.Header closeButton>
          <Modal.Title>Login Failed</Modal.Title>
        </Modal.Header>
        <Modal.Body>Check Your Connection. Please try again.</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseError}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  </div>

  )
}

export default StepRegister;