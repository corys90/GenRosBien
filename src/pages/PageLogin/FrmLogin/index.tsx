import { Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import './style.css';

const logo = require('./relaxed-woman-enjoying-sea.png');

const bordeTextBox = {
  width: "100%", 
  border: "0px",
  borderStyle: "solid",
  borderRadius: "0px",
  borderBottomWidth: "2px",
  borderColor: "#999999",
  backgroundColor: "red"
}

function FrmLogin() {

  const navigate = useNavigate();

  const validar = () => {
    navigate("/home");
  }

  const recoveryPassword = () => {
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
                  <input type="text" className="form-control " 
                    style={bordeTextBox} 
                    id="txtUser" placeholder="Nombre de usuario"/>
                </div>
                <div style={{height: "20px"}}></div>
                <div className=" mb-3 divUserPwd ">
                  <input type="password" className="form-control" 
                  style={bordeTextBox}  id="txtPassword" placeholder="Contraseña"/>
                </div>              
            </form>
            <div style={{height: "20px"}}></div>
            <div className="mb-3 divOlvidoPwd">
              <nav>
                <Link to="/passwordRecovery" className='text-decoration-none' onClick={recoveryPassword}  style={{fontSize: "14px"}}>
                  ¿Haz olvidado tu contraseña?
                  <br />
                  clic aquí.
                </Link> 
              </nav>
            </div>
            <div style={{height: "20px"}}></div>
            <div className=" mb-3 text-center ">
              <Button className="btn btn-danger rounded-0 " onClick={validar} style={{width: "100%", height: "45px"}}>Ingresar</Button>
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