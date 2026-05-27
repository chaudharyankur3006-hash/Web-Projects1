import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Our_Core_Values from './Our_Core_Values';

function Vision_mision() {
  return (
    <div>
    <div className=' d-flex justify-content-center flex-wrap gap-4 mt-5 m-3'>
    <Card className="border-0" style={{ width: '500px', boxShadow: '2px 2px 2px 2px #000000' }}>
      <div  className='d-flex align-items-center'>
          <i className="fa-regular fa-heart fa-2x me-2 text-primary"></i>
          <h4 className="mb-0">Our Mission</h4>
      </div>
      <ListGroup variant="flush">
        <ListGroup.Item style={{ border: 'none' }}>
            <h5>
                To inspire and enable people to explore the world through carefully curated, authentic travel experiences that create lasting memories, foster cultural understanding, and contribute positively to local communities worldwide.
            </h5>
        </ListGroup.Item>
      </ListGroup>
    </Card>
     <Card className="border-0" style={{ width: '500px', boxShadow: '2px 2px 2px 2px #000000' }}>
      <div className='d-flex align-items-center'>
        <i className="fa-solid fa-globe fa-2x me-2 text-primary"></i>
        <h4 className="mb-0">Our Vision</h4>
      </div>
      <ListGroup variant="flush">
        <ListGroup.Item style={{ border: 'none' }}>
            <h5>
                To be the world's most trusted travel partner, known for transforming the way people experience destinations through innovative, sustainable, and personalized travel solutions that connect travelers with the heart and soul of every place they visit.
            </h5>
        </ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
    <div>
      <Our_Core_Values/>
    </div>
    </div>
  );
}

export default Vision_mision;
