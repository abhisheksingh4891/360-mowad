import React from 'react'
import { Link } from 'react-router-dom';

const Description = () => {
  return (
    <div className='pb-4'>
        <div className="card" style={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
            <div className="card-body">
                <h5 className="card-title">Welcome to the Ministry of women & child development!</h5>
                <p className="card-text">The portal is your personalized gateway to a world of educational resources. Designed for students, educators, and lifelong learners, this portal provides a centralized platform for all your learning needs.</p>
                <p><b>Here's what you can expect:</b></p>
                <li className='mt-1'>Provides a saving scheme targeted at the parents of the girl child.</li>
                <li className='mt-2'>To encourage parents to build a fund for the future education and marriage expenses for their girl child.</li>
                <li className='mt-2'>It is a small deposit scheme for the girl child launched as a part of the ‘BetiBachaoBetiPadhao’ campaign.</li>
                <li className='mt-2'> A Sukanya Samridhi Account can be opened any time after the birth if the girl till she turns 10, with a minimum deposit of Rs 1,000.</li>
                <li className='mt-2'>The account can be opened in any post office or authorized branches of commercial banks.</li>
              <Link to="#" className="btn btn-primary mt-3">Read More</Link>
            </div>
          </div>
    </div>
  )
}

export default Description;