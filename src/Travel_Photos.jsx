import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from "./Footer";

function Ready_explore() {
  return (
    <div>
      
      <Card className="text-center pt-5 pb-5 bg-info border-0 rounded-0">
        
        <Card.Body>
          <Card.Title>Share Your Travel Photos</Card.Title>

          <Card.Text>
            Tag us in your travel photos for a chance to be featured
          </Card.Text>

          <div>
            <Button className='bg-white text-info'>
                Upload Photos
            </Button>
            <Button className='bg-transparent text-white  mx-3'>
                Follow Us
            </Button>
          </div>

        </Card.Body>

      </Card>

      <Footer />

    </div>
  );
}

export default Ready_explore;