import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from "./Footer";
import './Ready_explore.css'

function Ready_explore() {
  return (
    <div id='btn'>
      
      <Card className="text-center pt-5  border-0 rounded-0 " >
        
        <Card.Body>
          <Card.Title>
            <h3>
              Ready to Explore?
            </h3>
            </Card.Title>

          <Card.Text>
            <h4>
              Start planning your dream destination today
            </h4>
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