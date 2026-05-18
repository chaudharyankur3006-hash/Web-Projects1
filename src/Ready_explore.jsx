import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from "./Footer";

function Ready_explore() {
  return (
    <div>
      
      <Card className="text-center pt-5 pb-5 bg-info border-0 rounded-0">
        
        <Card.Body>
          <Card.Title>Ready to Explore?</Card.Title>

          <Card.Text>
            Start planning your dream destination today
          </Card.Text>

          <Button className='bg-white text-info'>
            Browse Your Options
          </Button>

        </Card.Body>

      </Card>

      <Footer />

    </div>
  );
}

export default Ready_explore;