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
/*     <div className='alignItemsHomeBar'>
      <Navbar>
        <Container>

              <div style={{width: "10%"}}></div>
              <Navbar.Brand href="#home">
                <div className=' imgBarContainer' >
                  <img src={logo} 
                    alt="Servicio de Bienestar Rosen" 
                    className='imgmobile'
                  />  
                </div>
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">

                    <div className=' alignItemsTextBar'>

                      <Nav.Link href="#home"><div style={{width: "20%", textAlign: "center", color: '2B2B2B'}}>HOME</div></Nav.Link>

                      <Nav.Link href="#home"><div style={{width: "25%",  textAlign: "center", color: '2B2B2B'}}>REEMBOLSO</div></Nav.Link>

                      <Nav.Link href="#home">
                          <div className='bell'>              
                            <img src={bellIcon} 
                            alt="Notificaciones" 
                            className='imgBellIcon'/>
                          </div>
                      </Nav.Link> 

                      <Nav.Link href="#home">
                        <div className='nombreUsr'>
                            <div>
                                <img src={userIcon} 
                                alt="Notificaciones" 
                                className='imgBellIcon'/>                  
                              </div>
                              <label>{nombre}</label>                    
                        </div>
                      </Nav.Link>  

                      <Nav.Link href="#home">
                        <div className='powerOnOff' >
                            <div>
                              <img src={powerIcon} 
                              alt="Notificaciones" 
                              className='imgBellIcon'/>                  
                            </div>
                            <label>Cerrar Sesión</label>
                        </div>
                      </Nav.Link>  

                  </div>
                </Nav>
              </Navbar.Collapse>
              <div style={{width: "10%"}}></div>

        </Container>
      </Navbar>
    </div>  */

    <Navbar bg="light" expand="lg" className='container-fluid alignItemsHomeBar'>
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