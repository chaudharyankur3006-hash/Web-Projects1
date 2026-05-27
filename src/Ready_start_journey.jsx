import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from "./Footer";

function Ready_start_journey() {
  return (
    <div>
      
      <Card className="text-center pt-5 pb-5 bg-info border-0 rounded-0">
        
        <Card.Body>
          <Card.Title>Ready to Start Your Journey?</Card.Title>

          <Card.Text>
            Let our experienced team help you create your perfect travel experience


          </Card.Text>

          <div>
            <Button className='bg-white text-info'>
                Explore Tours
            </Button>
            <Button className='bg-transparent text-white  mx-3'>
                Contact Us
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Footer />
    </div>
  );
}

export default Ready_start_journey;