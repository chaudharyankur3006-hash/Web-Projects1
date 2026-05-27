import React from 'react'
import './Contact.css'
import Get_in_Touch from './Get_in_Touch'

const Destination = () => {
  return (
    <div>
        <div className='Contact-page'>
      <div className='container-fluid d-flex flex-column justify-content-center align-items-center ' id='Contact-hero'>
        <h1 className='text-white'>Contact Us</h1>
        <h5 className='text-white'>We're here to help plan your perfect journey</h5>
      </div>    
    </div>
    <Get_in_Touch/>
    </div>
  )
}

export default Destination