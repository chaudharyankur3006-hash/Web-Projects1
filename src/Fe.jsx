import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Featured.css";

function Fe(props) {
  return (
    <div>
      <Card className="rounded shadow-lg pl-5" style={{ width: "350px", height: "450px" }}>
        <Card.Img variant="top" src={props.data.img} />
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
            <div>₹{props.data.price}</div>

            <div>
              <i className="fa-solid fa-star"></i>
              {props.data.rating}
            </div>
          </Card.Title>
          <Card.Title>{props.data.name}</Card.Title>
          <Card.Text>{props.data.desc}</Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <div>{props.data.days} Days</div>
            <Button variant="primary">View More</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Fe;
