import React from "react";
import Card from "react-bootstrap/Card";
import "./Travel_tips.css";
import Ready_explore from "./Ready_explore";

function Travelpro() {
  return (
      <div className="bg-light mt-4">
      <div className="travel_heading">
        <h1>Travel Tips</h1>
        <h5>Essential information for your journey</h5>
      </div>
      <div className="column w-100 mt-5 h-30 d-flex flex-lg-row flex-md-column flex-column justify-content-center align-items-center  gap-4">
        <Card className="border border-0">
          <Card.Body className="bg-white text-black rounded shadow" id="card_travel">
            <Card.Title className="d-flex justify-content-center">
              <i class="fa-regular fa-clock"></i>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-center">
              Best Time to Visit
            </Card.Subtitle>
            <Card.Text className="text-center">
              Plan your trip during the optimal season for weather and activities
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="border border-0">
          <Card.Body className="bg-white text-black rounded shadow" id="card_travel">
            <Card.Title className="d-flex justify-content-center">
              <i class="fa-solid fa-user-group"></i>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-center">
              Local Culture
            </Card.Subtitle>
            <Card.Text className="text-center">
              Learn about customs and traditions to enhance your experience
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="border border-0">
          <Card.Body className="bg-white text-black  rounded shadow" id="card_travel">
            <Card.Title className="d-flex justify-content-center ">
              <i class="fa-solid fa-location-dot"></i>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-center">
              Must-See Attractions
            </Card.Subtitle>
            <Card.Text className="text-center">
              Don't miss the iconic landmarks and hidden gems
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <br />
      <br />
      <br />
    <Ready_explore />
    </div>
  );
}

export default Travelpro;
