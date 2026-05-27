import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Visit_Our_Office from './Visit_Our_Office';

function Need_Immediate() {
  return (
    <div>
        <div className='bg-light'>
        <div className='text-center mt-5'>
            <h2>Need Immediate Help?</h2>
            <h6>Choose the best way to reach us</h6>
        </div>
    <div className='d-flex justify-content-center gap-5 flex-wrap'>
    <Card className="text-center p-5 shadow-lg" style={{width:"350px",height:"250px",display:"flex",justifyContent:"center"}}>
      <Card.Body>
        <Card.Title>
            <i class="fa-brands fa-rocketchat text-info fs-1"></i>   <br /> 
            Live Chat
        </Card.Title>
        <Card.Text>
          Get instant answers from our travel experts <br />
          <h6>Available 24/7</h6>
        </Card.Text>
        <Button variant="primary">Start Chat</Button>
      </Card.Body>
    </Card>

    <Card className="text-center p-5 shadow-lg" style={{width:"350px",height:"250px",display:"flex",justifyContent:"center"}}>
      <Card.Body>
        <Card.Title>
            <i text-info class="fa-solid fa-headphones text-info fs-1"></i> <br />
           Phone Support
        </Card.Title>
        <Card.Text>
          Speak directly with our travel consultants <br />
          <h6>Mon-Fri 9AM-6PM</h6>
        </Card.Text>
        <Button variant="primary">Call Now</Button>
      </Card.Body>
    </Card>
    <Card className="text-center p-5 shadow-lg" style={{width:"350px",height:"250px",display:"flex",justifyContent:"center"}}>
      <Card.Body>
        <Card.Title>
            <i class="fa-solid fa-globe text-info fs-1"></i> <br />   
            Video Call
        </Card.Title>
        <Card.Text>
          Schedule a video consultation for complex trips <br />
          <h6>By appointment</h6>
        </Card.Text>
        <Button variant="primary">Book Call</Button>
      </Card.Body>
    </Card>
    </div>
    <br />
    <br />
    </div>
    <Visit_Our_Office/>
    </div>
  );
}

export default Need_Immediate;