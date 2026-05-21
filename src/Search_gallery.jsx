import React from 'react'
import Gallery_image from './Gallery_image';


function Search_gallery() {
  return (
    <div>
      <div className='w-100 container-fluid col-lg-3 ' >
        <div className='bg-white rounded rounded-2 m-auto mt-4 p-3 d-flex justify-content-center align-items-center gap-3 w-auto'   >
            <div className='container1 d-flex justify-content-center gap-3 mt-1 flex-wrap' >
            <div className=' search_input_wrapper'>
              <i class="fa-solid fa-magnifying-glass" id='search_icon'></i>
              <input type="text" placeholder="Search photos..." className='w-24 h-10 rounded rounded-2'  id='filter'/>
            </div>
          
              <select name="" id="filter" className='w-80 h-10 rounded rounded-2'>
              <option value="" hidden>All Locations</option>
              <option value="">North</option>
              <option value="">South</option>
              <option value="">East</option>
              <option value="">West</option>
            </select>
            <select name="" id="filter" className='w-80 h-10 rounded rounded-2'>
              <option value=""hidden>All Months</option>
              <option value="">January to March</option>
              <option value="">April to June</option>
              <option value="">July to September</option>
              <option value="">October to December</option>
            </select>
            </div>
        </div>
    </div>
    <Gallery_image/>
    </div>
  )
}
export default Search_gallery