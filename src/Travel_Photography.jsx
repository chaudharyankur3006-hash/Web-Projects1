import React from "react";
import Card from "react-bootstrap/Card";
import "./Travel_tips.css";
import Ready_book from "./Ready_Book";
import Travel_Photos from "./Travel_Photos";

function Travel_Photography() {
  return (
      <div className="bg-light mt-4 pb-3">
      <div className="travel_heading pt-3">
        <h2>Travel Photography Tips</h2>
        <h5>Capture your own amazing travel moments</h5>
      </div>
      <div className="column w-100 mt-5 h-30 d-flex flex-lg-row flex-md-column flex-column justify-content-center align-items-center  gap-4">
        <Card className="border border-0">
          <Card.Body className="bg-white text-black rounded shadow" id="card_travel">
            <Card.Title className="d-flex justify-content-center">
                <h3>Golden Hour</h3>
            </Card.Title>
            <Card.Text className="text-center">
              <h6>Shoot during sunrise and sunset for warm, soft lighting</h6>
            </Card.Text>
          </Card.Body>
        </Card>
        
        <Card className="border border-0">
          <Card.Body className="bg-white text-black rounded shadow" id="card_travel">
            <Card.Title className="d-flex justify-content-center">
              <h3>Rule of Thirds</h3>
            </Card.Title>
            <Card.Text className="text-center">
              <h6>Intimate group sizes for better experiences</h6>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="border border-0">
          <Card.Body className="bg-white text-black  rounded shadow" id="card_travel">
            <Card.Title className="d-flex justify-content-center ">
                <h3>Local Culture</h3>
            </Card.Title>
            <Card.Text className="text-center">
              Capture authentic moments and respect local customs
            </Card.Text>
          </Card.Body>
        </Card>
        
        <Card className="border border-0">
          <Card.Body className="bg-white text-black  rounded shadow" id="card_travel">
            <Card.Title className="d-flex justify-content-center ">
              <h3>Pack Light</h3>
            </Card.Title>
            <Card.Text className="text-center">
              <h6>Bring versatile equipment that won't weigh you down</h6>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <br />
      <div>
        <Travel_Photos />
      </div>
    </div>
  );
}

export default Travel_Photography;
