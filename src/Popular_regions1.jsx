import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Popular_regions.css'

function BasicExample(props) {
  return (
    <div>
        <Card className="rounded shadow">
       <Card.Body>
             <Card.Img variant="top" src={props.data.img} style={{width:"200px", height:"200px"}} />
             <Card.Title id='addcard2'>{props.data.Name}</Card.Title>
       </Card.Body>
          
        </Card>
    </div>
  );
}

export default BasicExample;