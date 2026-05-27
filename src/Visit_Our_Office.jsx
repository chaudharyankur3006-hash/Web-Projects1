import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Footer from "./Footer";

function Visit_Our_Office() {
  return (
    <div >
      <div className="text-center mt-2 pt-5  bg-white" >
        <h2>Visit Our Office</h2>
        <h6>Come see us in person for personalized travel planning</h6>
      </div>
    <div className="row g-5 mx-5 d-flex justify-content-center bg-white">
        <Card className="text-center d-flex flex-wrap bg-light"style={{ width: "80%" }}>
        <Card.Body className="m-5">
          <i class="fa-solid fa-location-dot fs-1"></i>
          <br />
          Interactive map would be integrated here
          <Card.Text>123 Travel Street, Adventure City, AC 12345</Card.Text>
        </Card.Body>
      </Card>
      <br />
      <br />
    </div>
    <br />
    <br />
    <Footer/>
    </div>
  );
}

export default Visit_Our_Office;
