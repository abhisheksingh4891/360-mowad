import {React, useState} from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Components/Logo';
import bg1 from '../Assets/bg5.jpg'

const Apply = () => {

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [state, setState] = useState('');
  const [icode, setIcode] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [iname, setIname] = useState('');
  const [year, setYear] = useState('');
  const [study, setStudy] = useState('');


  // const navigate = useNavigate();

  const Submit = (e)=> {
    e.preventDefault();
    // navigate("/Apply");
  }
  

  return (
    <div className="container-fluid py-3 pb-5" style={{ backgroundImage: `url(${bg1})` , backgroundSize: 'cover', backgroundPosition: 'center', filter:'brightness(80%)'}}>
    <div className='mt-3'>
      <Logo/>
    </div>        
    <div className="row d-flex justify-content-center align-items-center mt-3">
      <div className="col col-xl-6">
        <div className="" style={{ borderRadius: "1rem", backgroundColor: 'rgba(255, 255, 255, 0.5)'}}> 
          <div className="row g-0">
              <div className="card-body p-4 p-lg-5 text-black">
                <form onSubmit={Submit} style={{fontFamily:'Raleway'}}>
                  <div>
                      <h5 className="mb-3 pb-1 fw-bold" style={{"letterSpacing": "1px"}}><u>Basic Details</u></h5>

                      <div className="row g-2">
                        <div className="col">
                          <div className="form-outline mb-4">
                            <label className="form-label text-black fw-bold" htmlFor="form2Example17">Name</label>
                            <input required type="text" id="form2Example17" className="form-control" onChange={(e) => setName(e.target.value)} name="first" value={name}/>
                          </div>
                        </div>

                        <div className="col">
                          <div className="form-outline mb-4">
                            <label className="form-label text-black fw-bold" htmlFor="form2Example18">Gender</label>
                            <select className="form-select" onChange={(e) => setGender(e.target.value)} value={gender}>
                              <option value="">Select Gender</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="row g-3">
                        <div className='col'>
                          <div className="form-outline mb-4">
                            <label className="form-label text-black fw-bold" htmlFor="form2Example19">Mobile Number</label>
                            <input required type="number" id="form2Example19" className="form-control form-control"  onChange={(e)=>{setPhone(e.target.value)}} name="phone" value={phone}/>
                          </div>
                        </div>

                        <div className='col'>
                          <div className="form-outline mb-4">
                            <label className="form-label text-black fw-bold" htmlFor="form2Example25">Aadhar Number</label>
                            <input required type="number" id="form2Example25" className="form-control" onChange={(e)=>{setAadhar(e.target.value)}} name="aadhar" value={aadhar} />
                          </div>
                        </div>
                      </div>

                      <div className="row g-3">
                        <div className='col'>
                          <div className="form-outline mb-4">
                            <label className="form-label text-black fw-bold" htmlFor="form2Example20">Email address</label>
                            <input required type="email" id="form2Example20" className="form-control" onChange={(e)=>{setEmail(e.target.value)}} name="email" value={email}/>
                          </div>
                        </div>

                        <div className='col'>                          
                          <div className="form-outline mb-4">
                            <label className="form-label text-black fw-bold" htmlFor="form2Example23">State Domicile</label>
                            <input required type="text" id="form2Example23" className="form-control" onChange={(e)=>{setState(e.target.value)}} name="state" value={state}/>
                          </div>
                        </div>
                      </div>

                    </div>

                  <div>
                      <h5 className="mb-3 pb-1 fw-bold" style={{"letterSpacing": "1px"}}><u>Academic Details</u></h5>

                      <div className="row g-3">
                        <div className='col'>
                          <div className="form-outline mb-4">
                            <label className="form-label text-black fw-bold" htmlFor="form2Example30">Institute Name</label>
                            <input required type="text" id="form2Example30" className="form-control" onChange={(e)=>{setIname(e.target.value)}} name="iname" value={iname}/>
                          </div>
                        </div>

                        <div className='col'>    
                          <div className="form-outline mb-4">
                            <label className="form-label text-black fw-bold" htmlFor="form2Example24">Institute Code</label>
                            <input required type="number" id="form2Example24" className="form-control" onChange={(e)=>{setIcode(e.target.value)}} name="code" value={icode}/>
                          </div>
                        </div>
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label text-black fw-bold" htmlFor="form2Example32">Graduation Year</label>
                        <input required type="number" id="form2Example32" className="form-control" onChange={(e)=>{setYear(e.target.value)}} name="year" value={year}/>
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label text-black fw-bold" htmlFor="form2Example33">Mode of study</label>
                        <select className="form-select" onChange={(e) => setStudy(e.target.value)} value={study}>
                          <option value="male">Online</option>
                          <option value="female">Offline</option>
                        </select>
                      </div>

                  </div>
                  
                  

                  


                  <div className="d-flex gap-2 mb-2">
                  <input required type="checkbox"/>
                  <a href="#!" className="small text-black text-decoration-none text-dark fw-bold">I agree for Terms and Conditions</a>
                  </div> 

                  <div className="pt-2 mb-4">
                    <button className="btn btn-success btn-block" type="submit">Submit</button>
                  </div>
                  
                  <p className="mb-2 text-black fw-bold" style={{"color": "blue"}}>Already Applied? </p>

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

export default Apply;