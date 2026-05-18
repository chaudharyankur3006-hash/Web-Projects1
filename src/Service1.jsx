import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Service.css'

function Service1(props) {
  const { data } = props;
  return (
    <Card className="rounded shadow-lg h-100 w-100">
      <Card.Img
        variant="top"
        src={data.img}
        className="img-fluid"
        style={{ height: '200px', width:'500px', objectFit: 'cover' }}
      />
      <Card.Body id='card_service'>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text id='card_Text'>
          {data.details}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Service1;





