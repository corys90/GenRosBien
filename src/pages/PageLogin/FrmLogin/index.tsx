import { Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import './style.css';

const logo = require('./relaxed-woman-enjoying-sea.png');

function FrmLogin() {

  const navigate = useNavigate();

  const validar = () => {

    alert("Ingresar...!!!");
    navigate("/home");
}

const recoveryPassword = () => {
  alert("Recuperar...!!!");
  navigate("/passwordRecovery");
}

  return (
    <div className='containerLogin'>
        <div className='formularioLogin'>
          <div className='login'>
            <div className='titulo' >
                <label>SISTEMA DE LOGIN</label>
            </div>
            <form>
                <div className=" mb-3 divUserPwd">
                  <input type="text" className="form-control" 
                    style={{width: 341}} id="txtUser" placeholder="Nombre de usuario"/>
                </div>
                <div style={{height: "20px"}}></div>
                <div className=" mb-3 divUserPwd ">
                  <input type="password" className="form-control" 
                  style={{width: 341}} id="txtPassword" placeholder="Contraseña"/>
                </div>              
            </form>
            <div style={{height: "20px"}}></div>
            <div className="mb-3 divOlvidoPwd">
              <nav>
                <Link to="/passwordRecovery" className='text-decoration-none' onClick={recoveryPassword}>¿Haz olvidado tu contraseña?
                  <br />
                  clic aquí.
                </Link> 
              </nav>
            </div>
            <div style={{height: "20px"}}></div>
            <div className=" mb-3 text-center ">
              <Button className="btn btn-danger " onClick={validar}>Ingresar</Button>
            </div>
          </div>
          <div className=" img-fluid divImgRelax">
            <img src={logo} alt="" />
          </div>
        </div>       
    </div> 
  );
}

export default FrmLogin;