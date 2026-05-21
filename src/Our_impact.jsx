import React from 'react'
import Awards_recognition from"./Awards_recognition"

function Our_impact() {
  return (
    <div style={{width:"100%"}}>
      <div className="bg-info text-white py-5 ">
      <div className="container-fluid px-0 text-center mb-4">
        <h2 className="fw-bold">Our Impact</h2>
        <h6 className="fw-normal">Numbers that tell our story</h6>
      </div>

      <div className="container-fluid px-0">
        <div className="row gy-4 justify-content-center text-center mx-0">
          <div className="col-6 col-md-3">
            <div className="d-flex flex-column align-items-center justify-content-center h-100 px-3 py-4">
              <i className="fa-regular fa-user fa-2x mb-3"></i>
              <h2 className="fw-bold mb-1">50,000+</h2>
              <p className="mb-0">Happy Travelers</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="d-flex flex-column align-items-center justify-content-center h-100 px-3 py-4">
              <i className="fa-solid fa-location-dot fa-2x mb-3"></i>
              <h2 className="fw-bold mb-1">100+</h2>
              <p className="mb-0">Destinations</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="d-flex flex-column align-items-center justify-content-center h-100 px-3 py-4">
              <i className="fa-regular fa-clock fa-2x mb-3"></i>
              <h2 className="fw-bold mb-1">14</h2>
              <p className="mb-0">Years Experience</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="d-flex flex-column align-items-center justify-content-center h-100 px-3 py-4">
              <i className="fa-regular fa-star fa-2x mb-3"></i>
              <h2 className="fw-bold mb-1">4.9/5</h2>
              <p className="mb-0">Customer Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Awards_recognition/>
    </div>
  )
}

export default Our_impact