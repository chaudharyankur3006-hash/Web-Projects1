import React from "react";
import Card from "react-bootstrap/Card";
import "./Travel_tips.css";
import Ready_book from "./Ready_Book";

function Our_packages() {
  return (
      <div className="bg-light mt-4">
      <div className="travel_heading">
        <h2>Why Choose Our Packages?</h2>
        <h6>We provide exceptional value and experiences</h6>
      </div>
      <div className="column w-100 mt-5 h-30 d-flex flex-lg-row flex-md-column flex-column justify-content-center align-items-center  gap-4">
        <Card className="border border-0">
          <Card.Body className="bg-white text-black rounded shadow" id="card_travel">
            <Card.Title className="d-flex justify-content-center">
              <i class="fa-regular fa-star"></i>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-center">
              Expert Curation
            </Card.Subtitle>
            <Card.Text className="text-center">
              Hand-picked experiences by travel experts
            </Card.Text>
          </Card.Body>
        </Card>
        
        <Card className="border border-0">
          <Card.Body className="bg-white text-black rounded shadow" id="card_travel">
            <Card.Title className="d-flex justify-content-center">
              <i class="fa-solid fa-user-group"></i>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-center">
              Small Groups
            </Card.Subtitle>
            <Card.Text className="text-center">
              Intimate group sizes for better experiences
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="border border-0">
          <Card.Body className="bg-white text-black  rounded shadow" id="card_travel">
            <Card.Title className="d-flex justify-content-center ">
              <i class="fa-solid fa-location-dot"></i>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-center">
              Local Guides
            </Card.Subtitle>
            <Card.Text className="text-center">
              Knowledgeable local guides in every destination
            </Card.Text>
          </Card.Body>
        </Card>
        
        <Card className="border border-0">
          <Card.Body className="bg-white text-black  rounded shadow" id="card_travel">
            <Card.Title className="d-flex justify-content-center ">
              <i class="fa-regular fa-clock"></i>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-center">
              Local Guides
            </Card.Subtitle>
            <Card.Text className="text-center">
              Knowledgeable local guides in every destination
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <br />
      <div>
        <Ready_book/>
      </div>
    </div>
  );
}

export default Our_packages;
