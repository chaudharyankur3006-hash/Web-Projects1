import React from "react";
import Card from "react-bootstrap/Card";
import Send_Message from "./Send_Message";


function Get_in_Touch() {
  return (
      <div className="bg-light mt-4">
      <div className="travel_heading">
        <h2>Get in Touch</h2>
        <h6>Multiple ways to reach our travel experts</h6>
      </div>
      <div className="column w-100 mt-5 h-30 d-flex flex-lg-row flex-md-column flex-column justify-content-center align-items-center  gap-4">
        <Card className="border border-0">
          <Card.Body className="bg-white text-black rounded shadow" id="card_travel">
            <Card.Title className="d-flex justify-content-center">
              <i class="fa-regular fa-star"></i>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-center">
              Phone
            </Card.Subtitle>
            <Card.Text className="text-center">
              +1 (555) 123-4567 <br />
              <h6>Mon-Fri 9AM-6PM EST</h6>
            </Card.Text>
          </Card.Body>
        </Card>
        
        <Card className="border border-0">
          <Card.Body className="bg-white text-black rounded shadow" id="card_travel">
            <Card.Title className="d-flex justify-content-center">
              <i class="fa-solid fa-user-group"></i>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-center">
              Email
            </Card.Subtitle>
            <Card.Text className="text-center">
              info@travelpro.com <br />
              <h6>24/7 email support</h6>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="border border-0">
          <Card.Body className="bg-white text-black  rounded shadow" id="card_travel">
            <Card.Title className="d-flex justify-content-center ">
              <i class="fa-solid fa-location-dot"></i>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-center">
              Office
            </Card.Subtitle>
            <Card.Text className="text-center">
              123 Travel Street <br />
              <h6>Adventure City, AC 12345</h6>
            </Card.Text>
          </Card.Body>
        </Card>
        
        <Card className="border border-0">
          <Card.Body className="bg-white text-black  rounded shadow" id="card_travel">
            <Card.Title className="d-flex justify-content-center ">
              <i class="fa-regular fa-clock"></i>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-center">
              Hours
            </Card.Subtitle>
            <Card.Text className="text-center">
              Mon-Fri 9AM-6PM <br />
              <h6>Weekend: 10AM-4PM</h6>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <br />
      <Send_Message/>
    </div>
  );
}

export default Get_in_Touch;
