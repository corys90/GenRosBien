import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../homeBar/asd1.svg';
import bellIcon from '../homeBar/campanaIcon.png';
import powerIcon from '../homeBar/powerIcon.png';
import userIcon from '../homeBar/userIcon.png';
import './style.css';

function HomeBar() {

  const [nombre, setNombre] = useState("Cristian A.")

  return (
    <Navbar bg="light" expand="lg" className='container-fluid '>
      <Container className=''>
        <Navbar.Brand href="#home">      
            <div className='imgBarContainer'>          
              <img src={logo} 
                alt="Servicio de Bienestar Rosen" 
                className='imgmobile'
              /> 
            </div>    
        </Navbar.Brand>
          <div className='iconsMobile'>
            <Nav.Link href="#link " >  
                      <div className='bell hide1'>              
                          <img src={bellIcon} alt="Notificaciones" />       
                      </div>
            </Nav.Link>
            <Navbar.Toggle aria-controls=" basic-navbar-nav" />
          </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#link">REEMBOLSO</Nav.Link>
            <Nav.Link href="#link">         
              <div className='bell hide2'>               
                  <img src={bellIcon} alt="Notificaciones" />
              </div>
            </Nav.Link> 
            <Nav.Link href="#link " >  
                <div className='nombreUsr'>              
                    <img src={userIcon} alt="Usuario" />   
                    <div>{nombre}</div>        
                </div>
            </Nav.Link>        
            <Nav.Link href="#link " >  
                <div className='powerOnOff'>              
                  <img src={powerIcon} alt="Cierre de sesión" /> 
                  <div>Cerrar Sesión</div>        
                </div>
            </Nav.Link>           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeBar;