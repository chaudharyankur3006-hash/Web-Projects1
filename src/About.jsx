import React from 'react'
import img1 from './assets/Traveling.jpg'
import './About.css'
import Out_story from './Out_story'

const About = () => {
  return (
    <div>
      <div className='About'>
          <div className='container-fluid d-flex flex-column justify-content-center align-items-center ' id='About_img' style={{paddingTop:'150px'}}>
              <h1 className='text-white'>About TravelPro</h1>
              <h6 className='text-white'>Creating unforgettable travel experiences since 2010</h6>
          </div>
      </div>
      <Out_story/>
    </div>
  )
}

export default About
