import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Featured_collection1(props) {
  return (
    <div className='container1 d-flex justify-content-center gap-3 mt-5 flex-wrap'>
    <Card style={{ width: '18rem' }} className='shadow-lg '>
      <Card.Img variant="top" src={props.data.img} />
      <Card.Body>
        <Card.Title>{props.data.name}</Card.Title>
        <Card.Text>
            {props.data.photos}
        </Card.Text>
        <Card.Text>
            {props.desc}
        </Card.Text>
        <a variant="primary" href={props.data.link}>
            View Collection
            <i className="fa-solid fa-arrow-right"></i>
        </a>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Featured_collection1;