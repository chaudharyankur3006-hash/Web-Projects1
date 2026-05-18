import Card from 'react-bootstrap/Card';

function BasicExample(props) {
  return (
    <div>
      <Card className="text-white border-0 overflow-hidden shadow-sm rounded-4 mx-auto rounded shadow-lg gap-3" style={{ width: '18rem', height: '250px' }}>
      <Card.Img 
        src={props.data.img} 
        alt={props.data.Name}
        style={{ height: "100%", width: "100%", objectFit: "cover" }}
      />
      <Card.ImgOverlay className="d-flex flex-column justify-content-end align-items-center pb-3 ">
        <h4 className="fw-bold mb-0 text-center">{props.data.Name}</h4>
      </Card.ImgOverlay>
    </Card>
    <br />
    
    </div>
  );
}

export default BasicExample;