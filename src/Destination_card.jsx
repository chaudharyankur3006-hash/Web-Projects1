import React from 'react'
import img1 from "./assets/Haridhwar.jpg" 
import img2 from "./assets/Kerala1.jpg"
import img3 from "./assets/Jagannath1.jpg"
import img4 from "./assets/Dwarka1.jpg"
import Destination1 from './Destination_card1'



function Destination_card() {
    const data = [
        {id:1,Name:"Haridhwar,North India",details:"Haridwar is a sacred North Indian city on the Ganges River, famous for temples, ghats, and pilgrimages.",img: img1},
        {id:2,Name:"Kerala,South India",details:"Kerala is a tropical state in South India known for its backwaters, spice plantations, and Ayurvedic wellness retreats.",img: img2},
        {id:3,Name:"Jagannath Puri,East India",details:"Jagannath Puri is a holy city in East India known for the annual Rath Yatra festival and the Jagannath Temple.",img: img3},
        {id:4,Name:"Dwarka,West India",details:"Dwarka is a sacred city in West India associated with Lord Krishna and known for its ancient temples.",img: img4},
        {id:5,Name:"Dwarka,West India",details:"Dwarka is a sacred city in West India associated with Lord Krishna and known for its ancient temples.",img: img4},
        {id:6,Name:"Dwarka,West India",details:"Dwarka is a sacred city in West India associated with Lord Krishna and known for its ancient temples.",img: img4}
    ]
  return (
    <div>
       



         

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
  )
}

export default Destination_card