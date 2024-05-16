import React, { useEffect } from 'react'
import Logo from '../Components/Logo'
import c1 from '../Assets/c4.jpg'
import { Link, useNavigate } from 'react-router-dom'

const Modal = () => {

    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(() => {
            navigate("/login")
          }, 2500);
    });
     
  return (
    <div className="container-fluid p-4" style={{ backgroundImage: `url(${c1})` , backgroundSize: 'cover', backgroundPosition: 'center', filter:'brightness(80%)', fontFamily:'Raleway', height:'100vh'}}>
        <Logo />
        <div className="row d-flex justify-content-center align-items-center mt-5 p-5">
            <div className="col col-xl-5">
                <div className="" style={{ borderRadius: "1rem", backgroundColor: 'rgba(255, 255, 255, 0.7)'}}> 
                <div className="row g-0">
                    <div className="card-body p-4 p-lg-5 text-black text-center">
                            <h4 className='pb-2'>Yoy have succesfully registered!!</h4>
                            <h5 className='pb-3'>Yor UID is your Aadhar number</h5>
                            <Link to='/login'><button className='btn btn-success'>Continue to Login</button></Link> 
                    </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Modal