import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function Destination_card1(props) {
  return (
   <div className=' d-flex justify-content-center align-items-center mt-5 mx-auto gap-3'>
     <Card className="rounded shadow-lg " >
      <Card.Img variant="top" src={props.data.img}/>
      <Card.Body>
        <Card.Title>{props.data.Name}</Card.Title>
        <Card.Text>
          {props.data.details}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <i class="fa-thin fa-location-dot"></i>
          {props.data.Tours}
        </ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body className='d-flex justify-content-center align-items-center'>
        <button className='rounded-2 bg-primary text-white border-0 w-50 h-20 '>Explore Tours
          <i className="fa-solid fa-arrow-right"></i>
        </button>
        
      </Card.Body>
    </Card>
   </div>

  );
}
export default Destination_card1;