import React from 'react'
import "./Search_gallery"
import './Gallery_image1.css'
import img1 from './assets/redfort.jpg'
import img2 from './assets/Suntemple.jpg'
import img3 from './assets/Tajmahal.jpg'
import img4 from './assets/Destination1.jpg'
import img5 from './assets/travel_galary1.jpg'
import img6 from './assets/travel_galary8.jpg'
import img7 from './assets/Shivraj_beach.jpg'
import img8 from './assets/Kerala1.jpg'
import img9 from './assets/ayodhya.webp'
import img10 from './assets/Haridhwar.jpg'
import img11 from './assets/Ujjain.webp'
import img12 from './assets/Udaypur.jpg'
import img13 from './assets/Wildlife_girnar.jpg'
import img14 from './assets/Wildlife_girnar1.jpg'
import img15 from './assets/Wildlife_girnar2.jpg'
import img16 from './assets/Wildlife_girnar3.jpg'
import img17 from './assets/Luxury1.jpg'
import img18 from './assets/Luxury2.jpg'
import img19 from './assets/Luxury3.jpg'
import img20 from './assets/Hotel_booking.jpg'
import img21 from './assets/Kedarnath1.jpg'
import img22 from './assets/Jagannath1.jpg'
import img23 from './assets/Badrinath.jpg'
import img24 from './assets/Dwarka1.jpg'
import Featured_collection from './Featured_collection'

function Gallery_image() {
  return (
    <div>
        <div className='container1 d-flex justify-content-center gap-3 mt-5 flex-wrap' >
            <a href="#image1" className='btn btn-outline-primary' id='b1'>All Photos</a>
            <a href="#image2" className='btn btn-outline-primary' id='b1'>Destination</a>
            <a href="#image3" className='btn btn-outline-primary' id='b1'>Adventure</a>
            <a href="#image4" className='btn btn-outline-primary' id='b1'>Culture</a>
            <a href="#image5" className='btn btn-outline-primary' id='b1'>Wildlife</a>
            <a href="#image6" className='btn btn-outline-primary' id='b1'>Luxury</a>
            <a href="#image7" className='btn btn-outline-primary' id='b1'>Family</a>
        </div>
        <div className='container1 d-flex justify-content-center gap-3 mt-5 flex-wrap' id='image1'>
            <div id='image2' className='d-flex justify-content-center gap-3 flex-wrap'>
              <img src={img1} alt="" id='img' className='shadow-lg rounded rounded-5'/>
              <img src={img2} alt="" id='img' className='shadow-lg rounded rounded-5'/>
              <img src={img3} alt="" id='img' className='shadow-lg rounded rounded-5'/>
              <img src={img4} alt="" id='img' className='shadow-lg rounded rounded-5'/>
            </div>
            <div id='image3' className='d-flex justify-content-center gap-3 flex-wrap'>
              <img src={img5} alt="" id='img' className='shadow-lg rounded rounded-5'/>
              <img src={img6} alt="" id='img' className='shadow-lg rounded rounded-5'/>
              <img src={img7} alt="" id='img' className='shadow-lg rounded rounded-5'/>
              <img src={img8} alt="" id='img' className='shadow-lg rounded rounded-5'/>
            </div>
            <div id='image4' className='d-flex justify-content-center gap-3 flex-wrap'>
              <img src={img9} alt="" id='img' className='shadow-lg rounded rounded-5'/>
              <img src={img10} alt="" id='img' className='shadow-lg rounded rounded-5'/>
              <img src={img11} alt="" id='img' className='shadow-lg rounded rounded-5'/>
              <img src={img12} alt="" id='img' className='shadow-lg rounded rounded-5'/>
            </div>
            <div id='image5' className='d-flex justify-content-center gap-3 flex-wrap'>
              <img src={img13} alt="" id='img' className='shadow-lg rounded rounded-5'/>
              <img src={img14} alt="" id='img' className='shadow-lg rounded rounded-5'/>
              <img src={img15} alt="" id='img' className='shadow-lg rounded rounded-5'/>
              <img src={img16} alt="" id='img' className='shadow-lg rounded rounded-5'/>
            </div>
            <div id='image6' className='d-flex justify-content-center gap-3 flex-wrap'>
              <img src={img17} alt="" id='img' className='shadow-lg rounded rounded-5'/>
              <img src={img18} alt="" id='img' className='shadow-lg rounded rounded-5'/>
              <img src={img19} alt="" id='img' className='shadow-lg rounded rounded-5'/>
              <img src={img20} alt="" id='img' className='shadow-lg rounded rounded-5'/>
            </div>
            <div id='image7' className='d-flex justify-content-center gap-3 flex-wrap'>
              <img src={img21} alt="" id='img' className='shadow-lg rounded rounded-5'/>
              <img src={img22} alt="" id='img' className='shadow-lg rounded rounded-5'/>
              <img src={img23} alt="" id='img' className='shadow-lg rounded rounded-5'/>
              <img src={img24} alt="" id='img' className='shadow-lg rounded rounded-5'/>
            </div>
          </div>
          <Featured_collection/>
        </div>
      )
    }


export default Gallery_image
