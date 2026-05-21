import React from 'react'
import img1 from './assets/Kerala1.jpg'
import img2 from './assets/Badrinath.jpg'
import img3 from './assets/East_india.jpg'
import img4 from './assets/Mount_abu.jpg'
import Featured_collection1 from './Featured_collection1'
import Gallery_image from './Gallery_image'
import Travel_Photography from './Travel_Photography'

function Featured_collection() {
    const data = [
        { id: 1, name: "South", photos: "20 photos", desc: "Discover the vibrant culture, stunning landscapes, and rich heritage of South India through our curated photo collection.", img: img1 },
        {id:2,name:"North",photos:"25 photos",desc:"Explore the diverse culture, stunning landscapes, and rich heritage of North India through our curated photo collection.",img:img2},    
        {id:3,name:"East",photos:"15 photos",desc:"Explore the diverse culture, stunning landscapes, and rich heritage of East India through our curated photo collection.",img:img3},    
        {id:4,name:"West",photos:"30 photos",desc:"Explore the diverse culture, stunning landscapes, and rich heritage of West India through our curated photo collection.",img:img4},    
    ]
  return (
    <div >
       <div className='text-center mt-5 pt-5 '>
            <h2>Featured Collection</h2>
            <p>Curated photo collections from our most popular destinations</p>
       </div>
       <div>
            <div className='container'>
                <div className='row '>
                    {data.map((item) => (
                        <div className='col-md-3' key={item.id}>
                            <Featured_collection1 data={item} />
                        </div>
                    ))}
                </div>
            </div>
       </div>
       <br />
       <Travel_Photography/>
    </div>
  )
}

export default Featured_collection
