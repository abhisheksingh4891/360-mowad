import React from 'react'

const LoginForm = () => {
  return (
    <div>
        <div className="col-md-4">
          <div className="card mb-5" style={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
            <div className="card-body">
              <h5 className="card-title mb-4">Student Login <b>:</b></h5>
              <form onSubmit={Submit}>
                <div className="mb-4">
                  <input type="text" className="form-control" placeholder="Uid" />
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="mb-2">
                    <Link to="#"><b>Forgot Password?</b></Link>
                </div>
                <div className='mb-3'><b>Institute/State/Ministry</b></div>
                <Link to="/studentpage"><button type="submit" className="btn btn-success mb-3">Login</button></Link>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LoginForm