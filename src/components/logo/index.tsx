import logo from './asd1.svg';
import './style.css';

function LogoLogin() {
  return (
      <div className='imgLogin '>
          <img src={logo} 
            alt="Servicio de Bienestar Rosen" 
            className='img-fluid d-block mx-auto imgmobile'
          />             
      </div>
  );
}

export default LogoLogin;