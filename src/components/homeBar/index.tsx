import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';

const logo = require("../homeBar/asd1.png")  as string;
const bellIcon  = require('../homeBar/campanaIcon.png');
const powerIcon = require('../homeBar/powerIcon.png');
const userIcon = require( '../homeBar/userIcon.png');

function HomeBar() {

  const nombre= "Cristian A.";

  return (
    <Navbar bg="light" expand="lg" className='alignItemsHomeBar' style={{width: "100%"}}>
    <div className='container-fluid'>
      <Navbar.Brand href="#home">      
          <div className='imgBarContainer '>          
            <img src={logo} 
              alt="Servicio de Bienestar Rosen" 
              width={53} height={53}
            /> 
          </div>    
      </Navbar.Brand>
        <div className='iconsMobile me-1 gap-4'>
          <Link to="#!" >  
                <div className='bell hide1 pt-2' >              
                    <img src={bellIcon} alt="Notificaciones" />       
                </div>
          </Link>
          <div className=' ' >
            <Navbar.Toggle aria-controls=" basic-navbar-nav basic" />
          </div>
        </div>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end gap-2">
          <Link to="/home" className='text-decoration-none me-2'>HOME</Link>
          <Link to="/reembolso"  className='text-decoration-none me-2'>REEMBOLSO</Link>
          <Link to="/reembolso/detail">         
            <div className='bell hide2 ' >               
                <img src={bellIcon} alt="Notificaciones" />
            </div>
          </Link> 
          <Link to="/reembolso/pago"  className='text-decoration-none'>  
              <div className='nombreUsr gap-2'>              
                  <img src={userIcon} alt="Usuario" />   
                  <div>{nombre}</div>        
              </div>
          </Link>        
          <Link to="/reembolso/solicitud" className='powerOnOff text-decoration-none me-2'>  
              <div className='powerOnOff gap-2'>              
                <img src={powerIcon} alt="Cierre de sesión" /> 
                <div>Cerrar Sesión</div>        
              </div>
          </Link>  
          <Link to="/reembolso/ingresosDoc" >  
              <div >              
                  R.i.d.      
              </div>
          </Link>         
          <Link to="/reembolso/examenes" >  
              <div >              
                  R.Ex.    
              </div>
          </Link>  
          <Link to="/reembolso/resumenSolicitud" >  
              <div >              
                  R.sol.     
              </div>
          </Link>  
          <Link to="/passwordReset" >  
              <div >              
                  Pwd.Rst.     
              </div>
          </Link>                     
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar> 
  );
}

export default HomeBar;