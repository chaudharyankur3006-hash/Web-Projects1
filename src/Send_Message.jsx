import React from 'react'
import Need_Immediate from './Need_Immediate'

function Send_Message() {
  return (
    <div>
        <div className='d-flex justify-content-center align-items-center min-vh-100 bg-light py-5 px-3'>
      <div style={{ width: "100%", maxWidth: "820px", border: "1px solid #ccc", borderRadius: "10px", backgroundColor: "#fff"}}> 
        <form action="">
            <div className='text-center mb-5'>
                <h1>Send us a Message</h1>
                <h6>Fill out the form below and we'll get back to you soon</h6>
            </div>
            
            <div className='container-fluid'>
                <div className='row g-4 mb-4'>
                    <div className='col-12 col-md-6'>
                        <label htmlFor="" className="mb-2 fw-semibold">Full Name*</label>
                        <input type="text" className="form-control" style={{ height:'40px', borderRadius:'5px'}} />
                    </div>
                    <div className='col-12 col-md-6'>
                        <label htmlFor="" className="mb-2 fw-semibold">Email*</label>
                        <input type="text" className="form-control" style={{ height:'40px', borderRadius:'5px'}} />
                    </div>
                </div>

                <div className='row g-4 mb-4'>
                    <div className='col-12 col-md-6'>
                        <label htmlFor="" className="mb-2 fw-semibold">Phone Number</label>
                        <input type="number" className="form-control" style={{ height:'40px', borderRadius:'5px'}} />
                    </div>
                    <div className='col-12 col-md-6'>
                        <label htmlFor="" className="mb-2 fw-semibold">Inquiry Type</label>
                        <select name="" id="" className="form-select" style={{ height:'40px', borderRadius:'5px'}} >
                            <option value="">General Inquiry</option>
                            <option value="">Booking Question</option>
                            <option value="">Customer Support</option>
                            <option value="">Partnership</option>
                            <option value="">Feedback</option>
                        </select>
                    </div> 
                </div>

                <div className='row mb-4'>
                    <div className='col-12'>
                        <label htmlFor="" className="mb-2 fw-semibold">Subject*</label>
                        <input type="text" className="form-control" style={{ height:'40px', borderRadius:'5px'}}/>
                    </div>
                </div>

                <div className='row mb-5'>
                    <div className='col-12'>
                        <label htmlFor="" className="mb-2 fw-semibold">Message *</label>
                        <textarea name="" id="" className="form-control" style={{ height:'120px', borderRadius:'5px'}}></textarea>
                    </div>
                </div>

                <div className='d-flex justify-content-center pb-2'>
                    <button className='bg-info text-white rounded px-4 py-2 border-0' style={{ fontSize: "18px" }}>
                        <i className="fa-solid fa-paper-plane me-2"></i>   
                        Send message
                    </button>
                </div>
            </div>
        </form>
      </div>
    </div>
    <Need_Immediate/>
    </div>
  )
}

export default Send_Message