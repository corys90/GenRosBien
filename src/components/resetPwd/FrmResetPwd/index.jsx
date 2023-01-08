import logo from './relaxed-woman-enjoying-sea.png';
import './style.css';

function FrmLogin() {
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
              <div className=" mb-3 divUserPwd">
                <input type="password" className="form-control" 
                style={{width: 341}} id="txtPassword" placeholder="Contraseña"/>
              </div>              
            </form>
            <div style={{height: "20px"}}></div>
            <div className="mb-3 divOlvidoPwd">
              <a href="www.genesys.cl">
                ¿Haz olvidado tu contraseña?
                <br />
                clic aquí. 
              </a>
            </div>
            <div style={{height: "20px"}}></div>
            <div className="mb-3 divOlvidoPwd">
              <button  type="button" className="btn btn-danger btnIngresar">Ingresar</button>
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