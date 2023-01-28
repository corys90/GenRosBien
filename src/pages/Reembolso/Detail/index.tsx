import { Container } from 'react-bootstrap';
import HomeBar from '../../../components/homeBar';
import './style.css';

const PageReembolsoDetail = () => {

  const nroReembolso = 249;
  const nombre = "Cristian A. Cortes Sarmiento";
  const fecha = "01-10-2023";
  const monto = "$14.990";
  const tipoPrestacion = "Dental";

  return (
    <>
        <HomeBar/>
        <Container>
          <div style={{height: "54px", display: 'flex', alignItems: 'center'}}>Reembolso en línea | historial de casos | Detalles </div>
        </Container>
        <Container className='sombra' >
          <div>
            <div className='header'>
                <div className='nroReembolso'>N° Reembolso: {nroReembolso}</div>
                <div>
                    <label>Estado</label>  
                    <i className="bi-check-circle text-success ms-1 me-1"
                      style={{fontSize: "12px"}} 
                    ></i> 
                    <label htmlFor="">Aprobado</label> 
                </div>
            </div>
            <div className='hr'></div>
            <div className='body'>
              <div className='bodySections border-end m-3' >
                  <div><label style={{fontSize: "14px", fontWeight: "700"}}>Nombre Beneficiario:</label> {nombre}</div>
                  <div><label style={{fontSize: "14px", fontWeight: "700"}}>Fecha Recepción:</label> {fecha}</div>
                  <div><label style={{fontSize: "14px", fontWeight: "700"}}>Fecha Pago:</label> {fecha}</div>
                  <div><label style={{fontSize: "14px", fontWeight: "700"}}>Monto Reembolso:</label> {monto}</div>
                  <div><label style={{fontSize: "14px", fontWeight: "700"}}>Tipo Prestación:</label> {tipoPrestacion}</div>
              </div>
              <div className='bodySections border-end m-3' >
                  <div className='tituloSeccionMiddle ps-2'>Detalle Liquidación</div>
                  <div className='bodyMiddleDescarga'>
                    <i className="bi-clipboard2-check-fill p-2"
                      style={{fontSize: "2.5rem"}} 
                      >
                    </i>
                    <div className='detailSectionMiddle'>
                        Liquidación {nroReembolso}
                        <button className="botonDescargar">Descargar Documento.</button>
                    </div>
                  </div>
              </div>
              <div className='bodySections m-3'>
                  <div className='tituloSeccionMiddle ps-2'>Documentación de Reembolso</div>
                  <div>
                    <i className="bi-file-pdf-fill text-warning mt-2 p-2">Archivo1.pdf</i>
                  </div>
                  <div>
                    <i className="bi-file-pdf-fill text-primary  mt-2 p-2">Liquidación.pdf</i>
                  </div>
                  <div>
                    <i className="bi-filetype-png text-danger  mt-2 p-2">Bono_001.jpg</i>
                  </div>
              </div>
            </div>
            <div className='hr'></div>
            <div className='container textObs'>
              <div className='textObs' >
                  <i className="bi-person-workspace me-2"
                    style={{fontSize: "14px"}} 
                  ></i>
                  Sin Observaciones
              </div>
            </div>
          </div>
        </Container>         
    </>
  );
}

export default PageReembolsoDetail;