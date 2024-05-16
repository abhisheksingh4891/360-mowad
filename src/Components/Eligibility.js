import React from 'react'
import { Link } from 'react-router-dom'

const Eligibility = () => {
  return (
    <div className='pb-5'>
        <div className="card" style={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
            <div className="card-body">
              <h5 className="card-title"><b>Eligibilty Criteria</b></h5>
              <p className="card-text">Following categories of working women and their children are being covered under this Scheme:</p>
                <li className='mt-1'>The girl child strictly has to be an Indian resident throughout the tenure of the scheme.</li>
                <li className='mt-3'>Incase if the residency status of the girl child changes in the interim, no interest shall be payable from the date of change and the account will be closed prematurely.</li>
                <li className='mt-3'>Working women, who may be single, widowed, divorced, separated, married but whose husband or immediate family does not reside in the same city/area. preference may be given to women from disadvantaged sections of the society. There should be also provision for reservation of seats for physically challenged beneficiaries.</li>
                <li className='mt-3'>Women who are under training for job provided the total training period does not exceed one year. This is only on the condition that there is vacancy available after accommodating working women. The number of women under training for job should not exceed 30% of the total capacity.</li>
                <li className='mt-3'>Girls up to the age of 18 years and boys up to the age of 5 years, accompanying working mothers will be provided accommodation, with their mothers. Working mothers may also avail of the services of the Day Care Centre, as provided under the scheme.</li>
                <li className='mt-3'>Working Women are entitled to hostel facilities provided their gross income does not exceed Rs. 50,000/- consolidated (gross) per month in metropolitan cities, or Rs 35,000/- consolidated (gross) per month, in any other place.</li>
              <Link to="#" className="btn btn-primary mt-3">Read More</Link>
            </div>
          </div>
    </div>
  )
}

export default Eligibility