import React, {useState} from 'react'
import Logo from '../Components/Logo'
import c1 from '../Assets/bg5.jpg'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormData({ name: '', email: '', message: '' });
      };
      
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
                                    <input className='form-control mb-3' type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div>
                                    <label htmlFor="email">Email:</label>
                                    <input className='form-control mb-3' type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div>
                                    <label htmlFor="message">Message:</label>
                                    <textarea className='form-control mb-3' rows="5" id="message" name="message" value={formData.message} onChange={handleChange} required />
                                </div>
                                
                                <Link to='/'><button className='btn btn-danger'>Send Message</button></Link> 
                            </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Contact;