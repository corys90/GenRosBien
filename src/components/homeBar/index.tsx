import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';
const logo = require("../homeBar/asd1.png")  as string;
const bellIcon  = require('../homeBar/campanaIcon.png');
const powerIcon = require('../homeBar/powerIcon.png');
const userIcon = require( '../homeBar/userIcon.png');

function HomeBar() {

  const nombre= "Cristian A.";

  return (
    <Navbar bg="light" expand="lg" className='container-fluid alignItemsHomeBar'>
    <Container className=''>
      <Navbar.Brand href="#home">      
          <div className='imgBarContainer '>          
            <img src={logo} 
              alt="Servicio de Bienestar Rosen" 
              width={53} height={53}
            /> 
          </div>    
      </Navbar.Brand>
        <div className='iconsMobile'>
          <Link to="#!" >  
                    <div className='bell hide1'>              
                        <img src={bellIcon} alt="Notificaciones" />       
                    </div>
          </Link>
          <Navbar.Toggle aria-controls=" basic-navbar-nav" />
        </div>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end gap-2">
          <Link to="/home" className='text-decoration-none me-2'>HOME</Link>
          <Link to="/reembolso"  className='text-decoration-none me-2'>REEMBOLSO</Link>
          <Link to="/reembolso/detail">         
            <div className='bell hide2'>               
                <img src={bellIcon} alt="Notificaciones" />
            </div>
          </Link> 
          <Link to="/reembolso/pago"  className='text-decoration-none me-2'>  
              <div className='nombreUsr '>              
                  <img src={userIcon} alt="Usuario" />   
                  <div>{nombre}</div>        
              </div>
          </Link>        
          <Link to="/reembolso/solicitud" className='powerOnOff text-decoration-none me-2'>  
              <div className='powerOnOff'>              
                <img src={powerIcon} alt="Cierre de sesión" /> 
                <div>Cerrar Sesión</div>        
              </div>
          </Link>  
          <Link to="/reembolso/ingresosDoc" >  
              <div >              
                  <i className="bi bi-cloud-check"></i>      
              </div>
          </Link>         
          <Link to="/reembolso/examenes" >  
              <div >              
                  <i className="bi bi-cloud-check"></i>      
              </div>
          </Link>  
          <Link to="/reembolso/resumenSolicitud" >  
              <div >              
                  <i className="bi bi-cloud-check"></i>      
              </div>
          </Link>            
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar> 
  );
}

export default HomeBar;