import React from 'react'
import './Tour_packages.css'
import Tour_packages_search from './Tour_packeges_search'

function Tour_packages() {
  return (
    <div>
      <div className='Tour_packages'>
        <div className='container-fluid d-flex flex-column justify-content-center align-items-center' style={{paddingTop:'150px'}}>
          <h1 className='text-white'>Tour Packages</h1>
          <h6 className='text-white'>Discover amazing tour packages around the world</h6>
        </div>  
        </div>  
        <div>
          <Tour_packages_search/>  
        </div>
    </div>
  )
}

export default Tour_packages