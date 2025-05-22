import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { useNavigate } from "react-router-dom";

function NavScrollExample() {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
        <img
              alt=""
              src="/public/logo.jpeg"
              width="50"
              className="d-inline-block align-top p-1"
            />
          Glamour Honey</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">صفحه اصلی</Nav.Link>
            <Nav.Link href="#action2">مقاله‌ها</Nav.Link>
            <NavDropdown title=" دسته‌بندی محصولات" id="navbarScrollingDropdown">
            <NavDropdown.Item onClick={() => navigate('/products')}>تمام محصولات</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/products/allwomenproduct')}>زنانه</NavDropdown.Item>
              <NavDropdown.Item  onClick={() => navigate('/products/allmenproduct')}>
                مردانه
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/products/allkidsproduct')}>
                بچگانه
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="عبارت مد نظر را وارد کنید..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className='m-1'>جست و جو</Button>
          </Form>
          <Link to="/register"  className='btnn'>ثبت نام</Link>
          <Link to="/login"  className='btnn'>ورود</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;