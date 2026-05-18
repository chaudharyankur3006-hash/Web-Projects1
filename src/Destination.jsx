import React from 'react'
import './Destination.css'
import Search_filter_destination from './Search_filter_destination'

const Destination = () => {
  return (
    <div className='destination-page'>
      <div className='container-fluid d-flex flex-column justify-content-center align-items-center ' id='destination-hero'>
        <h1 className='text-white'>Explore Destinations</h1>
        <h6 className='text-white'>Discover amazing places around the world</h6>
      </div>    
      <Search_filter_destination/>
    </div>
  )
}

export default Destination