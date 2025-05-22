import { CardGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from 'react-router-dom'; 

function BasicExample() {
  const navigate = useNavigate();
  return (
    <CardGroup className="m-5" style={{width:'70 rem !important', height:'10 rem'}}>
      <Card className="m-2">
        <Card.Img variant="top" src="../../../public/woman.jpg" />
        <Card.Body>
          <Card.Title>زنانه</Card.Title>
          <Card.Text>
            رویایت را بپوش
          </Card.Text>
          <Button variant="primary" onClick={() => navigate('/products/allwomenproduct')}> ورود</Button>
        </Card.Body>
      </Card>

      <Card className="m-2">
        <Card.Img variant="top" src="../../../public/man.jpg" />
        <Card.Body>
          <Card.Title>مردانه</Card.Title>
          <Card.Text>
          رویایت را بپوش
          </Card.Text>
          <Button variant="primary" onClick={() => navigate('/products/allmenproduct')}>ورورد</Button>
        </Card.Body>
      </Card>

      <Card className="m-2">
        <Card.Img variant="top" src="../../../public/kid.jpg" />
        <Card.Body>
          <Card.Title>بچگانه</Card.Title>
          <Card.Text>
          رویایت را بپوش
          </Card.Text>
          <Button variant="primary" onClick={() => navigate('/products/allkidsproduct')}>ورود</Button>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default BasicExample;
