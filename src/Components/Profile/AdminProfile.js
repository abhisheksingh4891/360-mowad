import axios from 'axios';
import React, { useEffect, useState } from 'react'

const baseURL = "https://three60-mowad-backend.onrender.com";
// const baseURL = "http://localhost:1000";

const AdminProfile = () => {

  const [profile, setProfile] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('AdminToken');
      try {
        const response = await axios.get(`${baseURL}/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile', error);
      }
    };

    fetchProfile();
  }, []);

  // if (!profile) return <div>Loading...</div>;

      
  return (
    <div>
        <div className="card" style={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
          <div className="card-body">
              <h5 className="card-title mb-4"><b>My Profile</b></h5>
              <form>
                <div className="mb-4">
                  <label>Name</label>
                  <input type="text" className="form-control" value={profile.name} disabled />
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <input type="text" className="form-control" value={profile.email} disabled />
                </div>
                <div className="mb-3">
                  <label>Phone Number</label>
                  <input type="text" className="form-control" value={profile.phone} disabled />
                </div>
                {/* <Link to="/"><button type="submit" className="btn btn-success mb-3">Logout</button></Link> */}
              </form>
            </div>
          </div>
    </div>
  )
}

export default AdminProfile;