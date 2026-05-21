  import React from "react";
  import Card from "react-bootstrap/Card";
  import './Award_recognition.css';

  function Awards_recognition() {
    const cardStyle = { width: "100%", maxWidth: "360px", margin: "0 auto",display:'flex' };

    return (
        <div className="mt-4">
        <div className="travel_heading">
          <h1>Awards & Recognition</h1>
          <h5>Industry recognition for our excellence</h5>
        </div>
        <div className="row g-5 mx-5 d-flex justify-content-center bg-white">
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <Card className="border-0 mx-auto" style={cardStyle}>
              <Card.Body className="bg-white text-black rounded shadow-lg" id="card_travel">
                <Card.Title className="d-flex justify-content-center">
                  <i class="fa-solid fa-anchor"></i>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-center">
                  <h5>Best Travel Agency 2023</h5>
                </Card.Subtitle>
                <Card.Text className="text-center">
                  Travel Industry Awards <br />
                  <h5>2023</h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <Card className="border-0 mx-auto" style={cardStyle}>
              <Card.Body className="bg-white text-black rounded shadow-lg" id="card_travel">
                <Card.Title className="d-flex justify-content-center">
                  <i class="fa-solid fa-anchor"></i>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-center">
                  <h4>Customer Choice Award</h4>
                </Card.Subtitle>
                <Card.Text className="text-center">
                  TripAdvisor
                  <h5>2025</h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <Card className="border-0 mx-auto" style={cardStyle}>
              <Card.Body className="bg-white text-black rounded shadow-lg" id="card_travel">
                <Card.Title className="d-flex justify-content-center">
                  <i class="fa-solid fa-anchor"></i>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-center">
                  <h4>Sustainable Tourism Leader</h4>
                </Card.Subtitle>
                <Card.Text className="text-center">
                  Global Travel Association
                  <h5>2025</h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <Card className="border-0 mx-auto" style={cardStyle}>
              <Card.Body className="bg-white text-black rounded shadow-lg" id="card_travel">
                <Card.Title className="d-flex justify-content-center">
                  <i class="fa-solid fa-anchor"></i>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-center">
                  <h4>Innovation in Travel</h4>
                </Card.Subtitle>
                <Card.Text className="text-center">
                  Tourism Excellence Awards
                  <h5>2025</h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <Card className="border-0 mx-auto" style={cardStyle}>
              <Card.Body className="bg-white text-black rounded shadow-lg" id="card_travel">
                <Card.Title className="d-flex justify-content-center">
                  <i class="fa-solid fa-anchor"></i>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-center">
                  <h4>Top Rated Service Provider</h4>
                </Card.Subtitle>
                <Card.Text className="text-center">
                  Travel Weekly
                  <h5>2026</h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <Card className="border-0 mx-auto" style={cardStyle}>
              <Card.Body className="bg-white text-black rounded shadow-lg" id="card_travel">
                <Card.Title className="d-flex justify-content-center">
                  <i class="fa-solid fa-anchor"></i>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-center">
                  <h4>Excellence in Customer Service</h4>
                </Card.Subtitle>
                <Card.Text className="text-center">
                Service Quality Institute
                <h5>2024</h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <br />
      </div>
    );
  }

  export default Awards_recognition;

