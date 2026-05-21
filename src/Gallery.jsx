import React from 'react'
import './Gallery.css'
import Search_gallery from './Search_gallery'

function Gallery() {
  return (
    <div>
        <div className='Gallery'>
            <div className='container-fluid d-flex flex-column justify-content-center align-items-center' style={{paddingTop:'150px'}}>
                <h1 className='text-white'>Travel Gallery</h1>
                <h6 className='text-white'>Stunning moments captured from our tours around the world</h6>
            </div>    
        </div>
        <Search_gallery/>
    </div>
  )
}

export default Gallery

