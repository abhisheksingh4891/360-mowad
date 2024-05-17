import React, {useState} from 'react'
import Logo from '../Components/Logo'
import c1 from '../Assets/c2.jpg'
import Navbar from '../Components/Navbar/Navbar'
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios'

const baseURL = "https://three60-mowad-backend.onrender.com";
// const baseURL = "http://localhost:1000";

const Contact = () => {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');

    const [showFetchingModal, setShowFetchingModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);

    const handleCloseFetching = () => setShowFetchingModal(false);
    const handleShowFetching = () => setShowFetchingModal(true);

    const handleShowSuccess = () => {
        setShowSuccessModal(true);
        setTimeout(() => {
        setShowSuccessModal(false);
        //   navigate('/ngologin');
        }, 1000);

    }

    const handleCloseError = () => setShowErrorModal(false);
    const handleShowError = () => setShowErrorModal(true);

    const handleSubmit = (e)=> {
        e.preventDefault();
        handleShowFetching();
        axios.post(`${baseURL}/feedback`,{
        name, message, email
        })
        .then(() => {
            handleCloseFetching();
            handleShowSuccess();
            setMessage("");
            setName("")
            setEmail("")
        })
        .catch(err => {
            console.log(err)
            handleCloseFetching();
            handleShowError();
    });
    }
        
  return (

    <div className="container-fluid p-4" style={{ backgroundImage: `url(${c1})` , backgroundSize: 'cover', backgroundPosition: 'center', filter:'brightness(80%)', fontFamily:'Raleway', height:'100vh'}}>
        <Logo />
        <Navbar />
        <div className="row d-flex justify-content-center align-items-center mx-1 pt-4 mt-3">
            <div className="col col-xl-5">
                <div className="" style={{ borderRadius: "1rem", backgroundColor: 'rgba(255, 255, 255, 0.7)'}}> 
                <div className="row g-0">
                    <div className="card-body p-4 text-black">
                            <h2>Let's Connect!</h2>
                            <p>Have a question or just want to say hi? We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.</p>
                            <form onSubmit={handleSubmit} className='gap-4'>
                                <div>
                                    <label htmlFor="name">Name:</label>
                                    <input className='form-control mb-3' type="text" id="name" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} required />
                                </div>
                                <div>
                                    <label htmlFor="email">Email:</label>
                                    <input className='form-control mb-3' type="email" id="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required />
                                </div>
                                <div>
                                    <label htmlFor="message">Message:</label>
                                    <textarea className='form-control mb-3' rows="5" id="message" value={message} name="message" onChange={(e)=>{setMessage(e.target.value)}} required />
                                </div>
                                
                                <button className='btn btn-danger'>Send Message</button>
                            </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>  
        <Modal show={showFetchingModal} onHide={handleCloseFetching}>
        <Modal.Header closeButton>
          <Modal.Title>Sending User Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please wait while we send your feedback...</Modal.Body>
      </Modal>

      
      <Modal show={showSuccessModal} onHide={handleCloseError}>
        <Modal.Header closeButton>
          <Modal.Title>Feedback Submitted</Modal.Title>
        </Modal.Header>
        <Modal.Body>You have successfully submitted feedback!</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleCloseError}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      
      <Modal show={showErrorModal} onHide={handleCloseError}>
        <Modal.Header closeButton>
          <Modal.Title>Feedback Submission Failed</Modal.Title>
        </Modal.Header>
        <Modal.Body>Check Your Connection or User already exists!</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseError}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Contact;