import './style.css';
const logo = require( './asd1.png');

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