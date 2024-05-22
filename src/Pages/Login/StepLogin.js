import {React, useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../Components/Logo';
import bg1 from '../../Assets/c4.jpg';
import axios from 'axios';
import { AppContext } from '../../Context/AppContext';
import { Modal, Button } from 'react-bootstrap';

const baseURL = "https://three60-mowad-backend.onrender.com";
// const baseURL = "http://localhost:1000";

const StepLogin = () => {

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { setStepLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const [showFetchingModal, setShowFetchingModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleCloseFetching = () => setShowFetchingModal(false);
  const handleShowFetching = () => setShowFetchingModal(true);

  
  const handleShowSuccess = () => {
    setShowSuccessModal(true);
    setTimeout(() => {
      setShowSuccessModal(false);
      navigate('/stepdashboard');
    }, 1000);
  }
  const handleCloseError = () => setShowErrorModal(false);
  const handleShowError = () => setShowErrorModal(true);

  const Submit = async (e)=> {
    e.preventDefault();
    handleShowFetching();
    try {
      const response = await axios.post(`${baseURL}/api/step/user/login`, { email, password });
      localStorage.setItem('StepToken', response.data.accessToken);
      setStepLogin(true);
      handleCloseFetching();
      handleShowSuccess();
    } catch (err) {
      console.error(err);
      handleCloseFetching();
      handleShowError();
    }
  };
  
  

  return (
    <div className="container-fluid py-3 pb-5" style={{ backgroundImage: `url(${bg1})` , backgroundSize: 'cover', backgroundPosition: 'center', filter:'brightness(80%)', height: '100vh'}}>
    <div className='mt-3'>
      <Logo/>
    </div>        
    <div className="row d-flex justify-content-center align-items-center mt-5 p-3">
      <div className="col col-xl-7">
        <div className="" style={{ borderRadius: "1rem", backgroundColor: 'rgba(255, 255, 255, 0.5)'}}> 
          <div className="row g-0">
            
              <div className="card-body p-4 p-lg-5 text-black">

                <form onSubmit={Submit} style={{fontFamily:'Raleway'}}>

                  <h5 className="mb-3 pb-1 fw-bold" style={{"letterSpacing": "1px"}}><u>The Support to Training and Employment Programme for Women (STEP) </u></h5>

                  <div className="form-outline mb-4">
                    <label className="form-label text-black fw-bold" htmlFor="form2Example25">Username</label>
                    <input required type="text" id="form2Example25" className="form-control" onChange={(e)=>{setEmail(e.target.value)}} name="email" />
                  </div>


                  <div className="form-outline mb-4">
                    <label className="form-label text-black fw-bold" htmlFor="form2Example21">Password</label>
                    <input required type="password" id="form2Example21" className="form-control" onChange={(e)=>{setPassword(e.target.value)}} name="password" />
                  </div>

                  
                    <div className="pt-2 mb-4">
                      <button className="btn btn-success btn-block" type="submit">Log in</button>
                    </div>
                  
                  <p className="mb-2 text-black fw-bold" style={{"color": "blue"}}>Don't have a account? <Link to="/stepregister"className="" style={{"color": "blue"}}>Register here</Link></p>

                  <Link className="text-danger fw-bold" to="/">Return to Home</Link>
                </form>
              </div>
          </div>
        </div>
      </div>
    </div>
   
    <Modal show={showFetchingModal} onHide={handleCloseFetching}>
        <Modal.Header closeButton>
          <Modal.Title>Fetching User Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please wait while we fetch your profile data...</Modal.Body>
      </Modal>

      
      <Modal show={showSuccessModal} onHide={handleCloseError}>
        <Modal.Header closeButton>
          <Modal.Title>Login Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>You have successfully logged in!</Modal.Body>
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
        <Modal.Body>Invalid credentials. Please try again.</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseError}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  </div>

  )
}

export default StepLogin;