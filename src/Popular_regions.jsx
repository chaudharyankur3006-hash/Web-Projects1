import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from "./assets/redfort.jpg"
import img2 from "./assets/mumbai1.jpg"
import img3 from "./assets/rajsthan.jpg"
import img4 from "./assets/kumbhalgarh_udaypur.webp"
import Popular_regions1 from './Popular_regions1'

function BasicExample() {
    const data = [
        {id:1,Name:"Red fort",img: img1},
        {id:2,Name:"main gate of india",img: img2},
        {id:3,Name:"Rajsthan",img: img3},
        {id:4,Name:"Kumbhalgarh",img: img4},
    ]
  return (
    <div>x
        <div className='text-center mt-5'>
            <h2>Popular Regions</h2>
            <h3>Explore destinations by region</h3>
        </div>
        <div className='container1 d-flex justify-content-center gap-2' id='hello'>
        {data.map((item) => (
                <div key={item.id} >
                    <Popular_regions1 data={item}/>
                </div>
            ))}
        </div>
    </div>
  );
}

export default BasicExample;