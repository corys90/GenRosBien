import HomeBar from '../../../components/homeBar';
import './style.css';

const PageReembolsoDetail = () => {

  const nroReembolso = 249;
  const nombre = "Cristian A. Cortes Sarmiento";
  const fecha = "01-10-2023";
  const monto = "$14.990";
  const tipoPrestacion = "Dental";

  return (
    <div style={{backgroundColor: "#EEF2F5"}}>
        <HomeBar/>
        <div style={{height: "54px"}}>
          <p>Reembolso en línea | historial de casos | Detalles</p>  
        </div>
        <div className='container-fluid sombra'>
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
              <div className='  borderAbajo' >
                  <div><label className='Hdatos'>Nombre Beneficiario:</label><label className='datos'>{nombre}</label></div>
                  <div><label className='Hdatos'>Fecha Recepción:</label><label className='datos'> {fecha}</label></div>
                  <div><label className='Hdatos'>Fecha Pago:</label><label className='datos'> {fecha}</label></div>
                  <div><label className='Hdatos'>Monto Reembolso:</label><label className='datos'> {monto}</label></div>
                  <div><label className='Hdatos'>Tipo Prestación:</label><label className='datos'> {tipoPrestacion}</label></div>
              </div>
              <div className='  borderAbajo' >
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
              <div className=' borderAbajo'>
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
            <div className='hr desparece'></div>
            <div className='textObs'>
              <div className='textObs' >
                  <i className="bi-person-workspace me-2"
                    style={{fontSize: "14px"}} 
                  ></i>
                  Sin Observaciones
              </div>
            </div>
        </div>         
    </div>
  );
}

export default PageReembolsoDetail;