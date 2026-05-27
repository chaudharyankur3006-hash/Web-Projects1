import React from 'react'
import img1 from './assets/travel_galary1.jpg';
import img2 from './assets/travel_galary2.jpg';
import img3 from './assets/travel_galary3.jpg';
import img4 from './assets/travel_galary4.jpg';
import img5 from './assets/travel_galary5.jpg';
import img6 from './assets/travel_galary6.jpg';
import img7 from './assets/travel_galary7.jpg';
import img8 from './assets/travel_galary8.jpg';
import Travel_gallary1 from './Travel_gallary1';
import './Travel_gallary.css';
import Footer from './Footer';
import Gallery_image from './Gallery_image';
import Nav from 'react-bootstrap/Nav';

const Travel_gallary = () => {
    const data=[
        {id:1,img:img1},
        {id:2,img:img2},
        {id:3,img:img3},
        {id:4,img:img4},
        {id:5,img:img5},
        {id:6,img:img6},
        {id:7,img:img7},
        {id:8,img:img8}
    ]
  return (
    <div>
        <div className='text-center mt-5 pt-5 fw-bold'>
            <h2>Travel Gallery</h2>
            <h5>Stunning moments captured from our tours</h5>
        </div>
        <div className='container'>
            <div className='row'>
                {
                    data.map((item)=>(
                        <div className="col-lg-4 col-md-6 col-12 mt-3 gap-4 rounded rounded-5  rounded" key={item.id} id="card_gallary">
                            <Travel_gallary1 data={item}/>
                        </div>
                    ))
                }
            </div>
            <div style={{display:'flex',justifyContent:'center', alignItems:'center'}} >
               <button id='travel_button' className='d-flex justify-content-center align-items-center gap-2 mb-3' >

                       <Nav.Link href="/Gallery">View on Gallery</Nav.Link>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Travel_gallary
