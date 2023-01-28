import { Button, Container } from 'react-bootstrap';
import HomeBar from '../../../components/homeBar';
import './style.css';

const PageReembolsoPago = () => {

  const nombre = "Katherine Zuber Kannisuiss";
  const nit = "12.345.678";
  const banco = "Banco Falabella";
  const tipoCta = "Cuenta Corriente";
  const nroCuenta = "123456789";
  const email = "Corys90@hotmail.com";

  return (
    <>
        <HomeBar/>
        <Container>
          <div style={{height: "54px", display: 'flex', alignItems: 'center'}}>Reembolso en línea | Verificar información de pago</div>
        </Container>
        <Container className="sombra">
            <div className='fontTitle mb-3 border-bottom'>
              <label htmlFor="">DATOS PARA REALIZAR PAGO</label>
            </div>  
            <Container className=''>
              <div className="text-center ">
                <label  className = 'ps-1 pe-2 border rounded-pill ' style={{backgroundColor: "#EEF2F5"}}>
                    <i className="bi bi-exclamation-circle m-1 text-primary "></i>
                    Si los datos no son correctos, debes solicitar actualizarlos directamente con el área de bienestar
                </label>
                <div className="mt-5 fw-bold"><label htmlFor="">{nombre}</label></div>
                <div className="mt-2 "><label htmlFor="">{nit}</label></div>
                <div className='mt-4 d-flex justify-content-center'>
                    <table className="m-3" >
                      <tr>
                        <td className=' text-end fw-bold'><div className="m-1" >Banco:</div></td>
                        <td className='  text-start'><div className="m-1" >{banco}</div></td>
                      </tr>
                      <tr className="m-3">
                        <td className='  text-end fw-bold'><div className="m-1" >Tipo Cuenta:</div></td>
                        <td className='  text-start'><div className="m-1" >{tipoCta}</div></td>
                      </tr>
                      <tr className="m-3">
                        <td className='  text-end fw-bold'><div className="m-1" >Número de Cuenta:</div></td>
                        <td className='  text-start'><div className="m-1" >{nroCuenta}</div></td>
                      </tr>
                      <tr className=" m-3">
                        <td className='  text-end fw-bold'><div className="m-1" >Correo Electrónico:</div></td>
                        <td className='  text-start'><div className="m-1" >{email}</div></td>
                      </tr>                      
                    </table>
                </div>
                <div className='p-5'>
                    <Button className=" btn btn-secondary me-5" style={{width: "183px", borderRadius: "0px"}}><i className="bi bi-caret-left"></i>Volver</Button>
                    <Button className=" btn btn-danger ms-5" style={{width: "183px", borderRadius: "0px"}}>Siguiente<i className="bi bi-caret-right"></i></Button>
                </div>
              </div>
            </Container> 
        </Container>        
    </>
  );
}

export default PageReembolsoPago;