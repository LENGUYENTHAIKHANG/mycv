import React from 'react'
import './info.css'

function Info() {
  return (
    <div>
      <br></br>
      <div style={{ fontSize: '30px' }}> ABOUT ME</div>
      <br></br>
      <div style={{ fontSize: '20px' }} >I am currently a final year student at University of Transport and Communications campus in HCMC. A
        dynamic, creative and professional environment is necessary to improve my skills. I like reading books and
        playing soccer. I’m a careful and hard-working person. I’m eager to learn new things and willing to work in
        team. I easily adapt to new working environment and take initiative at work</div>
      <br></br>
      <hr></hr>
      <br></br>
      <div style={{ fontSize: '30px' }}> EDUCATION</div>
      <br></br>
      <div className='info-body' >
        <div style={{ width: '80%' }}>
          <div className='info-title' style={{ fontSize: '20px' }}>University of Transport and Communications – Campus in Ho Chi Minh City</div>
          <div className='info-class' style={{ fontSize: '20px' }}>Information Technology</div>
          <div>GPA:2.76/4</div>
        </div>
        <div>08/2018 - Now</div>
      </div>
      <br></br>
      <div className='info-body' >
        <div style={{ width: '80%' }}>
          <div className='info-title' style={{ fontSize: '20px' }}>Internship at TMA Solutions</div>
          <div className='info-class' style={{ fontSize: '20px' }}>Front-end developer</div>

        </div>
        <div>01/2022 - 04/2022</div>
      </div>
      <br></br>
    </div>
  )
}

export default Info