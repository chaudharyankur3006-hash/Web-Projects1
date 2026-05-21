import React from 'react'
import './Tour_packages_search.css'
import Tour_packages from './Tour_packages'
import Tour_packages_card from './Tour_packages_card'




function Tour_packages_search() {
  return (
    <div>
      <div className='w-100 container-fluid col-lg-3 ' >
        <div className='bg-white rounded rounded-2 m-auto mt-4 p-3 d-flex justify-content-center align-items-center gap-3 w-auto border border-1'>
            <div className='container1 d-flex justify-content-center gap-3 mt-1 flex-wrap' >
            <div className=' search_input_wrapper'>
              <i class="fa-solid fa-magnifying-glass" id='search_icon'></i>
              <input type="text" placeholder="Search destinations..." style={{width:'250px'}} className='h-10 rounded rounded-2'  id='filter'/>
            </div>
          
              <select name="" id="filter" className=' h-10 rounded rounded-2' style={{width:'250px'}}>
              <option value="" hidden>All Categories</option>
              <option value="">Beach</option>
              <option value="">Mountain</option>
              <option value="">City</option>
              <option value="">Cultural</option>
              <option value="">Wildlife</option>
            </select>
            <select name="" id="filter" className=' h-10 rounded rounded-2' style={{width:'250px'}}>
              <option value=""hidden>Duration</option>
              <option value="">Under 3 days</option>
              <option value="">3 - 7 days</option>
              <option value="">7 - 14 days</option>
              <option value="">14 days+</option>
            </select>
              <select name="" id="filter" className=' h-10 rounded rounded-2' style={{width:'250px'}}>
              <option value=""hidden>Price Range</option>
              <option value="">Under ₹5000</option>
              <option value="">₹5000 - ₹10000</option>
              <option value="">₹10000 - ₹20000</option>
              <option value="">₹20000+</option>
            </select>
            <button className='btn btn-info text-white' id='filter' style={{width:'250px'}}>
              <i className="fa-solid fa-filter"></i>
              Filter
            </button>
            </div>
        </div>
    </div>
   <div>
     <Tour_packages_card/>
   </div>
    </div>
  )
}
export default Tour_packages_search