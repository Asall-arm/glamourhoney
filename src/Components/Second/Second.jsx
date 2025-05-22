import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useNavigate } from 'react-router-dom';

function GroupExample() {
  const navigate = useNavigate();
  return (
    <CardGroup className='my-5'>
      <Card className="bg-dark text-white"  onClick={() => navigate('/products/allaccessoryproduct')}>
        <Card.Img variant="top" src="../../../public/logo.jpeg" />
        <Card.ImgOverlay>
          <Card.Title>اکسسوری</Card.Title>
        </Card.ImgOverlay>
      </Card>

      <Card className="bg-dark text-white" onClick={() => navigate('/products/allshoesproduct')}>
        <Card.Img variant="top" src="../../../public/logo.jpeg" />
        <Card.ImgOverlay>
          <Card.Title>کفش</Card.Title>
        </Card.ImgOverlay>
      </Card>

      <Card className="bg-dark text-white"  onClick={() => navigate('/products/allwomenproduct')}>
        <Card.Img variant="top" src="../../../public/logo.jpeg" />
        <Card.ImgOverlay>
          <Card.Title>لباس</Card.Title>
        </Card.ImgOverlay>
      </Card>

      <Card onClick={() => navigate('/products/allkidsproduct')} className="bg-dark text-white">
        <Card.Img variant="top" src="../../../public/logo.jpeg" />
        <Card.ImgOverlay>
          <Card.Title>بچگانه</Card.Title>
        </Card.ImgOverlay>
      </Card>

    </CardGroup>
  );
}

export default GroupExample;