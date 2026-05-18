import React from 'react'
import img1 from "./assets/Haridhwar.jpg" 
import img2 from "./assets/Kerala1.jpg"
import img3 from "./assets/Jagannath1.jpg"
import img4 from "./assets/Dwarka1.jpg"
import img5 from "./assets/Kedarnath1.jpg"
import img6 from "./assets/Badrinath.jpg"
import Destination1 from './Destination_card1'
import Popular_regions from './Popular_regions'
      
function Destination_card() {
    const data = [
        {id:1,Name:"Haridhwar,North India",details:"Haridwar is a sacred North Indian city on the Ganges River, famous for temples, ghats, and pilgrimages.",Tours:"10 available",rating:"5.0",img: img1},
        {id:2,Name:"Kerala,South India",details:"Kerala is a tropical state in South India known for its backwaters, spice plantations, and Ayurvedic wellness retreats.",Tours:"15 available",rating:"4.9",img: img2},
        {id:3,Name:"Jagannath Puri,East India",details:"Jagannath Puri is a holy city in East India known for the annual Rath Yatra festival and the Jagannath Temple.",Tours:"9 available",rating:"5.0",img: img3},
        {id:4,Name:"Dwarka,West India",details:"Dwarka is a sacred city in West India associated with Lord Krishna and known for its ancient temples.",Tours:"30 available",rating:"5.0",img: img4},
        {id:5,Name:"Kedarnath,North India",details:"Kedarnath Temple is a sacred Himalayan Shiva shrine attracting pilgrims with breathtaking spiritual mountain surroundings.",rating:"5.0",Tours:"10 available",img: img5},
        {id:6,Name:"Badrinath,North India",details:"Badrinath is a sacred Hindu pilgrimage site in the Himalayas, known for its ancient temple and spiritual significance.",rating:"5.0",Tours:"10 available",img: img6}
    ]    
  return (
    <div>
        <div className='bg-light mt-4'>
             <div className='container1 d-flex justify-content-center gap-5 mt-1 flex-wrap' id='hello' >
            {data.map((item) => (
                <div key={item.id} className='destination-card-col'>
                    <Destination1 data={item}/>
                </div>
            ))}
            </div>
            <br />
            <br />
        </div>
        <Popular_regions/>
    </div>
  )   
}     
      
export default Destination_card



{/* <i className="fa-solid fa-star text-warning"></i> */}
{/* <i className="fa-solid fa-location-dot me-2"></i> */}
{/* <i className="fa-solid fa-arrow-right ms-2"></i> */}