import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from "./Footer";

function Ready_explore() {
  return (
    <div>
      
      <Card className="text-center pt-5 pb-5 bg-info border-0 rounded-0">
        
        <Card.Body>
          <Card.Title>Ready to Book Your Adventure?</Card.Title>

          <Card.Text>
            Contact us today to customize your perfect tour package
          </Card.Text>

          <div>
            <Button className='bg-white text-info'>
                Book Now
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

export default Ready_explore;