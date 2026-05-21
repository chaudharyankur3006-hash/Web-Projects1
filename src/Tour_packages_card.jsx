import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import img1 from './assets/kerala1.jpg';
import img2 from './assets/Statue_of_unity.jpg'
import img3 from './assets/mount_abu.jpg'
import img4 from './assets/Wildlife_girnar.jpg'
import img5 from './assets/Jaipur_city.jpg'
import img6 from './assets/Shivraj_beach.jpg'
import Packages_categories from './Package_categories';

function Tour_packages_card() {
  return (
    <div>
      <div className='d-flex flex-wrap justify-content-center gap-5 mt-5'>
    <Card style={{ width: '350px', height: 'auto' ,border: '1px solid #dee2e6'}} className='shadow-lg'>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between'>
          <div>
            Kerala Adventure Tour
          </div>
          <div>
            <i className="fa-solid fa-star text-warning"></i>
            4.9
          </div>
        </Card.Title>
        <Card.Text>
          Kerala offers thrilling adventure activities including trekking, houseboat cruises, wildlife safaris, paragliding, rafting, and camping experiences.
        </Card.Text>
      </Card.Body>
      <ListGroup className="pt-3">
        <div className='d-flex justify-content-evenly pl-2'>
          <div>
              <i className="fa-solid fa-clock"></i>
               15 Days            
          </div>
          <div>
            <i className="fa-solid fa-user-group"></i>
            12-15 People
          </div>
        </div>
      </ListGroup>
      <ListGroup className="pt-3">
        <div className='d-flex justify-content-evenly pl-2'>
          <div>
              <i className="fa-solid fa-location-dot"></i>
               Kerala, India          
          </div>
          <div>
           <i className="fa-solid fa-briefcase"></i>
            Available
          </div>
        </div>
      </ListGroup>
       <ListGroup className="pt-3 text-center flex-column">
        <h5>
          <span className=''>₹ 25,000 <del>₹ 30,000</del></span>
        </h5>
        <h5>Per person</h5>
      </ListGroup>
      <Card.Body>
        <button href="#" className='bg-info text-white border-0 rounded' style={{width:'100%',height:'35px'}}>View Details</button>
      </Card.Body>
    </Card>


    <Card style={{ width: '350px', height: 'auto' ,border: '1px solid #dee2e6'}} className='shadow-lg'>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between'>
          <div>
            Statue of Unity
          </div>
          <div>
            <i className="fa-solid fa-star text-warning"></i>
            4.8
          </div>
        </Card.Title>
        <Card.Text>
          Standing at 182 metres, India's Statue of Unity is the world's tallest monument. It honors Sardar Vallabhbhai Patel, representing national integrity and engineering excellence.
        </Card.Text>
      </Card.Body>
      <ListGroup className="pt-3">
        <div className='d-flex justify-content-evenly pl-2'>
          <div>
              <i className="fa-solid fa-clock"></i>
               2 Days            
          </div>
          <div>
            <i className="fa-solid fa-user-group"></i>
            20-25 People
          </div>
        </div>
      </ListGroup>
      <ListGroup className="pt-3">
        <div className='d-flex justify-content-evenly pl-2'>
          <div>
              <i className="fa-solid fa-location-dot"></i>
               Gujarat, India          
          </div>
          <div>
           <i className="fa-solid fa-briefcase"></i>
            Available
          </div>
        </div>
      </ListGroup>
       <ListGroup className="pt-3 text-center flex-column">
        <h5>
          <span className=''>₹ 2000 <del>₹ 3000</del></span>
        </h5>
        <h5>Per person</h5>
      </ListGroup>
      <Card.Body>
        <button href="#" className='bg-info text-white border-0 rounded' style={{width:'100%',height:'35px'}}>View Details</button>
      </Card.Body>
    </Card>


    <Card style={{ width: '350px', height: 'auto' ,border: '1px solid #dee2e6'}} className='shadow-lg'>
      <Card.Img variant="top" src={img3} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between'>
          <div>
            Mount Abu
          </div>
          <div>
            <i className="fa-solid fa-star text-warning"></i>
            4.9
          </div>
        </Card.Title>
        <Card.Text>
          Mount Abu, Rajasthan's only hill station, offers a cool retreat with scenic views, Nakki Lake, Dilwara Temples, and vibrant local culture.
        </Card.Text>
      </Card.Body>
      <ListGroup className="pt-3">
        <div className='d-flex justify-content-evenly pl-2'>
          <div>
              <i className="fa-solid fa-clock"></i>
               5 Days            
          </div>
          <div>
            <i className="fa-solid fa-user-group"></i>
            20-25 People
          </div>
        </div>
      </ListGroup>
      <ListGroup className="pt-3">
        <div className='d-flex justify-content-evenly pl-2'>
          <div>
              <i className="fa-solid fa-location-dot"></i>
               Rajasthan, India          
          </div>
          <div>
           <i className="fa-solid fa-briefcase"></i>
            Available
          </div>
        </div>
      </ListGroup>
       <ListGroup className="pt-3 text-center flex-column">
        <h5>
          <span className=''>₹ 10,000 <del>₹ 15,000</del></span>
        </h5>
        <h5>Per person</h5>
      </ListGroup>
      <Card.Body>
        <button href="#" className='bg-info text-white border-0 rounded' style={{width:'100%',height:'35px'}}>View Details</button>
      </Card.Body>
    </Card>


    <Card style={{ width: '350px', height: 'auto' ,border: '1px solid #dee2e6'}} className='shadow-lg'>
      <Card.Img variant="top" src={img4}/>
      <Card.Body>
        <Card.Title className='d-flex justify-content-between'>
          <div>
            Girnar
          </div>
          <div>
            <i className="fa-solid fa-star text-warning"></i>
            5.0
          </div>
        </Card.Title>
        <Card.Text>
          Girnar is a hill station in Gujarat, known for its ancient temples and scenic beauty.
        </Card.Text>
      </Card.Body>
      <ListGroup className="pt-3">
        <div className='d-flex justify-content-evenly pl-2'>
          <div>
              <i className="fa-solid fa-clock"></i>
               3 Days            
          </div>
          <div>
            <i className="fa-solid fa-user-group"></i>
            20-25 People
          </div>
        </div>
      </ListGroup>
      <ListGroup className="pt-3">
        <div className='d-flex justify-content-evenly pl-2'>
          <div>
              <i className="fa-solid fa-location-dot"></i>
               Gujarat, India          
          </div>
          <div>
           <i className="fa-solid fa-briefcase"></i>
            Available
          </div>
        </div>
      </ListGroup>
       <ListGroup className="pt-3 text-center flex-column">
        <h5>
          <span className=''>₹ 5,000 <del>₹ 7,500</del></span>
        </h5>
        <h5>Per person</h5>
      </ListGroup>
      <Card.Body>
        <button href="#" className='bg-info text-white border-0 rounded' style={{width:'100%',height:'35px'}}>View Details</button>
      </Card.Body>
    </Card>


    <Card style={{ width: '350px', height: 'auto' ,border: '1px solid #dee2e6'}} className='shadow-lg'>
      <Card.Img variant="top" src={img5} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between'>
          <div>
            Jaipur City Tour
          </div>
          <div>
            <i className="fa-solid fa-star text-warning"></i>
            4.9
          </div>
        </Card.Title>
        <Card.Text>
          Jaipur, the capital of Rajasthan, is known for its stunning palaces, forts, and vibrant culture.
        </Card.Text>
      </Card.Body>
      <ListGroup className="pt-3">
        <div className='d-flex justify-content-evenly pl-2'>
          <div>
              <i className="fa-solid fa-clock"></i>
               5 Days            
          </div>
          <div>
            <i className="fa-solid fa-user-group"></i>
            20-25 People
          </div>
        </div>
      </ListGroup>
      <ListGroup className="pt-3">
        <div className='d-flex justify-content-evenly pl-2'>
          <div>
              <i className="fa-solid fa-location-dot"></i>
               Rajasthan, India          
          </div>
          <div>
           <i className="fa-solid fa-briefcase"></i>
            Available
          </div>
        </div>
      </ListGroup>
       <ListGroup className="pt-3 d-flex text-center flex-column">
        <h5>
          <span className=''>₹ 10,000 <del>₹ 15,000</del></span>
        </h5>
        <h5>Per person</h5>
      </ListGroup>
      <Card.Body>
        <button href="#" className='bg-info text-white border-0 rounded' style={{width:'100%',height:'35px'}}>View Details</button>
      </Card.Body>
    </Card>


    <Card style={{ width: '350px', height: 'auto' ,border: '1px solid #dee2e6'}} className='shadow-lg'>
      <Card.Img variant="top" src={img6} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between'>
          <div>
            Shivraj Beach
          </div>
          <div>
            <i className="fa-solid fa-star text-warning"></i>
            4.9
          </div>
        </Card.Title>
        <Card.Text>
          Shivraj Beach is a popular destination in Gujarat, known for its pristine sands and crystal-clear waters.
        </Card.Text>
      </Card.Body>
      <ListGroup className="pt-3">
        <div className='d-flex justify-content-evenly pl-2'>
          <div>
              <i className="fa-solid fa-clock"></i>
               2 Days            
          </div>
          <div>
            <i className="fa-solid fa-user-group"></i>
            15-20 People
          </div>
        </div>
      </ListGroup>
      <ListGroup className="pt-3">
        <div className='d-flex justify-content-evenly pl-2'>
          <div>
              <i className="fa-solid fa-location-dot"></i>
               Gujarat, India          
          </div>
          <div>
           <i className="fa-solid fa-briefcase"></i>
            Available
          </div>
        </div>
      </ListGroup>
       <ListGroup className="pt-3 d-flex text-center flex-column">
        <h5>
          <span className=''>₹4,000  <del>₹6,000</del></span>
        </h5>
        <h5>Per person</h5>
      </ListGroup>
      <Card.Body>
        <button href="#" className='bg-info text-white border-0 rounded' style={{width:'100%',height:'35px'}}>View Details</button>
      </Card.Body>
    </Card>
    </div>
    <br />
    <br />
   <div> <Packages_categories/></div>
    </div>
  );
}

export default Tour_packages_card;