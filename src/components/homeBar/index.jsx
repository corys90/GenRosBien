import { useState } from 'react';
import logo from '../homeBar/asd1.svg';
import bellIcon from '../homeBar/campanaIcon.png';
import powerIcon from '../homeBar/powerIcon.png';
import userIcon from '../homeBar/userIcon.png';
import './style.css';

function HomeBar() {

  const [nombre, setNombre] = useState("Cristian A.")

  return (
    <div className='alignItemsHomeBar'>

            <div style={{width: "10%"}}></div>
            <div className=' imgBarContainer' >
              <img src={logo} 
                alt="Servicio de Bienestar Rosen" 
                className='imgmobile'
              />  
            </div>

            <div className=' alignItemsTextBar'>

                <div style={{width: "20%", textAlign: "center", color: '2B2B2B'}} >HOME</div>

                <div style={{width: "25%",  textAlign: "center", color: '2B2B2B'}} >REEMBOLSO</div>

                <div className='bell'>              
                <img src={bellIcon} 
                  alt="Notificaciones" 
                  className='imgBellIcon'/>
                </div> 

                <div className='nombreUsr'>
                  <div>
                      <img src={userIcon} 
                      alt="Notificaciones" 
                      className='imgBellIcon'/>                  
                    </div>
                    <label>{nombre}</label>                    
                </div>

                <div className='powerOnOff' >
                  <div>
                    <img src={powerIcon} 
                    alt="Notificaciones" 
                    className='imgBellIcon'/>                  
                  </div>
                  <label>Cerrar Sesión</label>
                </div>

            </div>

            <div style={{width: "10%"}}></div>

    </div> 
  );
}

export default HomeBar;