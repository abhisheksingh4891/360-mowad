import React from 'react'
import { Link } from 'react-router-dom'

const MyProfile = () => {

    const Submit = (e)=> {
        e.preventDefault();
      }
      
  return (
    <div>
        <div className="card" style={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
          <div className="card-body">
              <h5 className="card-title mb-4"><b>My Profile</b></h5>
              <form onSubmit={Submit}>
                <div className="mb-4">
                    <label>Name</label>
                    <input type="text" className="form-control" disabled  />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input type="password" className="form-control" disabled  />
                </div>
                <div className="mb-3">
                    <label>Phone Number</label>
                    <input type="password" className="form-control" disabled  />
                </div>
                <Link to="/"><button type="submit" className="btn btn-success mb-3">Logout</button></Link>
              </form>
            </div>
          </div>
    </div>
  )
}

export default MyProfile