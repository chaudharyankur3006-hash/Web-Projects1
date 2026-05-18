import React from "react";
import "./Featured.css";
import img1 from "./assets/Udaypur_adventur.jpg";
import img2 from "./assets/Jaimahal.jpg";
import img3 from "./assets/Kerala.jpg";
import Fe from "./Fe";
import Travelpro from "./Travelpro";

function Featured() {
    const data = [
        {id:1,name:"Udaypur adventure park", rating:4.8,  price:2999 , desc:"Thrilling rides, ziplining, camping, and unforgettable adventures amidst Udaipur’s landscapes." , days:3 , img:img1},
        {id:2,name:"Jaimahal Rajsthan", rating:4.9,  price:3500 , desc:"Royal heritage hotel blending luxury, history, gardens, and Rajasthani elegance.x" , days:4 , img:img2},
        {id:3,name:"Jatayu Earth’s Center Kerala", rating:4.9,  price:8000 , desc:"Giant bird sculpture, adventure park, nature and mythology destination." , days:8 , img:img3},
    ]
  return (
    <div id="box2">
      <div className="text-center mt-3">
        <h2>Featured Tour Packages</h2>
        <h4>Hand-picked tours for the best experiences</h4>
      </div>

      <div className="container">
        <div className="row">
            {
                data.map((item)=>(
                    <div className="container1 d-flex justify-content-center gap-5 mt-1 flex-wrap" key={item.id}>
                        <Fe data={item}/>
                    </div>
            ))
        }
        </div>
      </div>
    <Travelpro/>
    </div>
  );
}

export default Featured;