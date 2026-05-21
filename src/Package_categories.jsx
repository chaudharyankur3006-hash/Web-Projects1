import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from "./assets/travel_galary7.jpg"
import img2 from "./assets/rajsthan.jpg"
import img3 from "./assets/Wildlife_girnar.jpg"
import img4 from "./assets/kumbhalgarh_udaypur.webp"
import Packages_categories1 from './Packages_categories1';
import Our_packages from './Our_packages';

function Packages_categories() {
    const data = [
        {id:1,Name:"Adventure tours",package:"10 packages",img: img1},
        {id:2,Name:"Cultural Tours",package:"5 packages",img: img2},
        {id:3,Name:"Wildlife Tours",package:"6 packages",img: img3},
        {id:4,Name:"Historical Tours",package:"3 packages",img: img4},
    ]
  return (
    <div>
        <div className='text-center mt-5'>
            <h2>Package Categories</h2>
            <h4>Find the perfect tour type for your interests</h4>
        </div>
        <div className='container1 d-flex justify-content-center gap-5 mt-1 flex-wrap' id='hello'>
        {data.map((item) => (
                <div key={item.id} >
                    <Packages_categories1 data={item}/>
                </div>
            ))}
        </div>
        <div>
            <Our_packages/>
        </div>
    </div>
  );
}

export default Packages_categories;
