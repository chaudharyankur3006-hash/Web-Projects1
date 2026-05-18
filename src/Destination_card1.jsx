import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Destination_card1(props) {
  return (
    <Card className="mb-3  shadow-lg" style={{ width: '22rem'}}>
      <Card.Img variant="top" src={props.data.img} />
      <div>
        <Card.Body>
        <Card.Title className='d-flex justify-content-between'>
            {props.data.Name}
           <div>
            <i className="fa-solid fa-star text-warning"></i>
            {props.data.rating}
           </div>
        </Card.Title>
        <Card.Text>
          {props.data.details}
        </Card.Text>
      </Card.Body>
      </div>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <i className="fa-solid fa-location-dot me-2"></i>
          {props.data.Tours}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <button className="btn btn-primary">Explore
          <i className="fa-solid fa-arrow-right ms-2"></i>
        </button>
      </Card.Body>
    </Card>
  );
}

export default Destination_card1;