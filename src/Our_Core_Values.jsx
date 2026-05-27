  import React from "react";
  import Card from "react-bootstrap/Card";
  import Our_impact from "./Our_impact";
  
  function Our_Core_Values() {
    return (
        <div row g-5 mx-5 d-flex justify-content-center bg-white>
        <div className="text-center mt-5" >
          <h1>Our Core Values</h1>
          <h5>The principles that guide everything we do</h5>
        </div>
        <div className="row g-5 mx-5 d-flex justify-content-center bg-white">
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <Card className="">
              <Card.Body className="bg-white text-black rounded shadow-lg" id="card_travel">
                <Card.Title className="d-flex justify-content-center">
                  <i class="fa-solid fa-anchor fa-2x me-1 text-primary fa-2x me-1 text-primary"></i>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-center">
                  <h4>Trust & Safety</h4>
                </Card.Subtitle>
                <Card.Text className="text-center">
                  Your safety and security are our top priorities in every destination we serve.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex ">
            <Card className="border-0 w-100">
              <Card.Body className="bg-white text-black rounded shadow-lg" id="card_travel">
                <Card.Title className="d-flex justify-content-center">
                  <i class="fa-regular fa-star fa-2x me-1 text-primary"></i>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-center">
                  <h4>Excellence</h4>
                </Card.Subtitle>
                <Card.Text className="text-center">
                  We strive for perfection in every detail, from planning to execution.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <Card className="border-0 w-100">
              <Card.Body className="bg-white text-black rounded shadow-lg" id="card_travel">
                <Card.Title className="d-flex justify-content-center">
                  <i class="fa-regular fa-heart fa-2x me-1 text-primary"></i>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-center">
                  <h4>Authenticity</h4>
                </Card.Subtitle>
                <Card.Text className="text-center">
                  We create genuine experiences that connect you with local cultures and traditions.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <Card className="border-0 w-100">
              <Card.Body className="bg-white text-black rounded shadow-lg" id="card_travel">
                <Card.Title className="d-flex justify-content-center">
                  <i class="fa-solid fa-globe fa-2x me-1 text-primary"></i>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-center">
                  <h4>Sustainability</h4>
                </Card.Subtitle>
                <Card.Text className="text-center">
                  We're committed to responsible tourism that benefits local communities and environments.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <Card className="border-0 w-100">
              <Card.Body className="bg-white text-black rounded shadow-lg" id="card_travel">
                <Card.Title className="d-flex justify-content-center">
                  <i className="fa-solid fa-user-group fa-2x me-1 text-primary"></i>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-center">
                  <h4>Customer Focus</h4>
                </Card.Subtitle>
                <Card.Text className="text-center">
                  Every decision we make is centered around creating exceptional experiences for our travelers.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <Card className="border-0 w-100">
              <Card.Body className="bg-white text-black rounded shadow-lg" id="card_travel">
                <Card.Title className="d-flex justify-content-center">
                  <i class="fa-regular fa-chess-rook fa-2x me-1 text-primary"></i>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-center">
                  <h4>Innovation</h4>
                </Card.Subtitle>
                <Card.Text className="text-center">
                We continuously evolve our services to meet changing travel needs and preferences.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <br />
        <br />
        <div>
          <Our_impact/>
        </div>
      </div>
    );
  }

  export default Our_Core_Values;
