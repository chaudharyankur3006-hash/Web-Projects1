import React from 'react'
import img1 from'./assets/Our_story_img.jpg'
import Vision_mision from './Vision_mision'

function Out_story() {
  return (
    <div className="container">
      <div className="row align-items-center py-5">
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <h2 className="mb-3">Our Story</h2>
          <h5>Founded in 2010 by a group of passionate explorers, IndiaTravellers began with a simple vision: to showcase the incredible beauty, culture, and diversity of India to travelers from around the world. What started as a small local travel agency has now grown into a trusted travel platform, helping thousands of travelers discover the true essence of India every year.</h5>
          <h5 className="mb-2">Our journey has taken us across the majestic Himalayas, the royal palaces of Rajasthan, the peaceful backwaters of Kerala, and the vibrant landscapes of Gujarat, including the white salt desert of Kutch, the Statue of Unity, and the cultural heritage of Ahmedabad.</h5>
          <h5>We believe that traveling through India is more than just visiting places — it is about experiencing cultures, traditions, flavors, and unforgettable moments. From Gujarat’s colorful festivals, handicrafts, and Garba nights to its warm hospitality, every journey becomes a lasting memory.</h5>
        </div>
        <div className="col-12 col-md-6 text-center">
          <img src={img1} alt="Our story" className="img-fluid" style={{borderRadius: 10, maxHeight: 420, objectFit: 'cover'}} />
        </div>
      </div>
      <div>
        <Vision_mision/>
      </div>
    </div>
  )
}

export default Out_story
