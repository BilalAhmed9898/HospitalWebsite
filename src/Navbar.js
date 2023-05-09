import Container from 'react-bootstrap/Container';
import CloseButton from 'react-bootstrap/CloseButton';
import './App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaHeartbeat, FaHospital ,FaHospitalAlt} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Whatsapp from './DashBoard/Assests/pngwing.com.png';
import Emergancy from './DashBoard/Assests/Emergancy.png';


function NavbarTop() {
  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/0123456789";
  };
  
  return (
    <Navbar variant="light" bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/"><h4><span className='title1'>Al-Shams</span>   <span className='title2'>Hospital</span></h4><FaHeartbeat /><FaHospital /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/How">How It Work</Nav.Link>
            <Nav.Link as={NavLink} to="/Doctors">Find a Doctor</Nav.Link>
            <Nav.Link as={NavLink} to="/About">About Us</Nav.Link>
            <Nav.Link as={NavLink} to="/Contact">Contact</Nav.Link>
            <Nav.Link as={NavLink} to="*"></Nav.Link>
          </Nav>
          <img src={Whatsapp} title='Message On Whatsapp' width="55" height="55" onClick={handleWhatsAppClick} />
          <img src={Emergancy} title='Emergancy Call' alt="WhatsApp Icon" width="55" height="55" />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarTop;