import React from 'react'
import { Link } from 'react-router-dom'

const Helpdesk = () => {
  return (
    <div>
        <div className="card mt-3" style={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
            <div className="card-body">
              <h5 className="card-title">Helpdesk</h5>
              <p className="card-text">Get assistance from our support team.</p>
              <Link to="#" className="btn btn-danger">Contact Us</Link>
            </div>
          </div>
    </div>
  )
}

export default Helpdesk