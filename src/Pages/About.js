import React from 'react'
import Logo from '../Components/Logo'
import c1 from '../Assets/c2.jpg'
import Navbar from '../Components/Navbar/Navbar'

const About = () => {
     
  return (
    <div className="container-fluid p-4" style={{ backgroundImage: `url(${c1})` , backgroundSize: 'cover', backgroundPosition: 'center', filter:'brightness(80%)', fontFamily:'Raleway', height:'100vh'}}>
        <Logo />
        <Navbar />
        <div className="row d-flex justify-content-center align-items-center mx-1 pt-4 mt-3">
            <div className="col col-xl-5">
                <div className="" style={{ borderRadius: "1rem", backgroundColor: 'rgba(255, 255, 255, 0.7)'}}> 
                    <div className="row g-0">
                        <div className="card-body p-4 text-black">
                            <h1 className='text-center pb-2'><u>About Us</u></h1>  
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Nunc quis orci odio. Sed posuere consectetur est at lobortis. 
                            </p>
                            <div>
                                <h5 className=''><b>Our Mission :</b></h5>
                                <p>
                                    Our mission is to **[insert your company's mission statement here]**. 
                                    We are passionate about **[what you're passionate about]**.
                                </p>
                            </div>
                            <div>
                                <h5 className=''><b>Our Team :</b></h5>
                                <p>
                                Our team is made up of a talented group of individuals with expertise in 
                                "MERN Stack" . We are dedicated to providing our customers 
                                with the best possible service and experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default About;