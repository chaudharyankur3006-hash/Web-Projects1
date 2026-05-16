import React from 'react'
import img1 from "./assets/Haridhwar.jpg" 
import img2 from "./assets/Kerala1.jpg"
import img3 from "./assets/Jagannath1.jpg"
import img4 from "./assets/Dwarka1.jpg"
import img5 from "./assets/Kedarnath1.jpg"
import Destination1 from './Destination_card1'
import Popular_regions from './Popular_regions'


function Destination_card() {
    const data = [
        {id:1,Name:"Haridhwar,North India",details:"Haridwar is a sacred North Indian city on the Ganges River, famous for temples, ghats, and pilgrimages.",Tours:"10 available",img: img1},
        {id:2,Name:"Kerala,South India",details:"Kerala is a tropical state in South India known for its backwaters, spice plantations, and Ayurvedic wellness retreats.",Tours:"15 available",img: img2},
        {id:3,Name:"Jagannath Puri,East India",details:"Jagannath Puri is a holy city in East India known for the annual Rath Yatra festival and the Jagannath Temple.",Tours:"9 available",img: img3},
        {id:4,Name:"Dwarka,West India",details:"Dwarka is a sacred city in West India associated with Lord Krishna and known for its ancient temples.",Tours:"30 available",img: img4},
        {id:5,Name:"Kedarnath,North India",details:"Kedarnath Temple is a sacred Himalayan Shiva shrine attracting pilgrims with breathtaking spiritual mountain surroundings.",Tours:"10 available",img: img5}
    ]
  return (
    <div>
        <div className='bg-light mt-4'>
             <div className='container1 d-flex justify-content-center gap-5 mt-1 flex-wrap' id='hello' >
            {data.map((item) => (
                <div key={item.id}  >
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