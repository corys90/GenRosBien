import { Button, Container } from 'react-bootstrap';
import HomeBar from '../../../components/homeBar';
import './style.css';

const ItemOptions = (props: any) => {
  return(
    <div className={`${props.clase} m-2 d-flex flex-row`} style={{width:props.ancho, backgroundColor: props.colorBG}}>
         <input type="radio" className="me-2 ms-2" name={props.name}/>
         <div>
          <label className='fw-bold'>{props.nombre}</label><br /> 
          <label htmlFor="">{props.nit}</label> 
         </div>
    </div>
  );
}

const PageIngresoDoc = () => {

  function dragOverHandler(ev: any) {
    console.log('File(s) in drop zone');
  
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }

  function removeDragData(ev: any) {
    
    console.log('Removing drag data')
  
    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to remove the drag data
      ev.dataTransfer.items.clear();
    } else {
      // Use DataTransfer interface to remove the drag data
      ev.dataTransfer.clearData();
    }
  }

  function dropHandler(ev: any) {
    console.log('Fichero(s) arrastrados');
  
    // Evitar el comportamiendo por defecto (Evitar que el fichero se abra/ejecute)
    ev.preventDefault();
  
    if (ev.dataTransfer.items) {
      // Usar la interfaz DataTransferItemList para acceder a el/los archivos)
      for (var i = 0; i < ev.dataTransfer.items.length; i++) {
        // Si los elementos arrastrados no son ficheros, rechazarlos
        if (ev.dataTransfer.items[i].kind === 'file') {
          var file = ev.dataTransfer.items[i].getAsFile();
          console.log('... file[' + i + '].name = ' + file.name);
        }
      }
    } else {
      // Usar la interfaz DataTransfer para acceder a el/los archivos
      for (var i = 0; i < ev.dataTransfer.files.length; i++) {
        console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
      }
    }
  
    // Pasar el evento a removeDragData para limpiar
    removeDragData(ev)
  }

  return (
    <>
        <HomeBar/>
        <Container>
          <div style={{height: "54px", display: 'flex', alignItems: 'center'}}>Reembolso en línea | Completa los servicios a reembolsar</div>
        </Container>
        <div className="container sombra">
            <div className='fontTitle mb-3 border-bottom d-flex flex-row '>
              <div style={{width:"88%"}}>
                <label htmlFor="">INGRESO DE DOCUMENTACIÓN</label>
              </div>
              <div style={{width:"12%"}} className=" m-1">
                  <Button className=" btn btn-danger" style={{width: "136px", borderRadius: "0px", fontSize: "12px"}}><i className="bi bi-plus-circle me-1"></i>Nuevo Reembolso</Button>
              </div>
            </div>  
            <div style={{display: "flex", alignItems: 'center', flexDirection: "column"}}>
              <ItemOptions
                nombre="Cristian A. Cortes Sarmiento" clase="ps-1 pe-2 border rounded-pill " colorBG="#EEF2F5"
                iconClas="bi bi-shield-plus" ancho="380px" nit="73.160.918" name="ingDocs"/>
                
              <ItemOptions
                nombre="Alberto C. Cortes Sarmiento" clase="ps-1 pe-2 border rounded-pill " colorBG="#EEF2F5"
                iconClas="bi bi-shield-plus" ancho="380px" nit="12.345.678 " name="ingDocs"/>
              
              <ItemOptions
                  nombre="Alberto C. Cortes Sarmiento" clase="ps-1 pe-2 border rounded-pill " colorBG="#EEF2F5"
                  iconClas="bi bi-shield-plus" ancho="380px" nit="12.345.678 " name="ingDocs"/>

              <label  className='mt-5 mb-5 ps-1 pe-2 border rounded-pill ' style={{backgroundColor: "#EEF2F5"}}>
                  <i className="bi bi-exclamation-circle m-1 text-primary "></i>
                  Consideraciones que debes tener para subir los documentos
              </label>

              <div id="drop_zone" onDrop={dropHandler} onDragOver={dragOverHandler} className="text-center mb-3"
                  style={{border:"2px dashed #AAAAAA", width: "50%"}}>
                  <h3><label><i className="bi bi-upload "></i></label></h3>
                  <p>Adjunta o arrastra la boleta, factura o bono si también tienes documentación adicional o respaldos de la prestación.</p>
                  <input type="file" name="files" id="files" hidden={true} multiple/>
              </div>


            </div>
        </div>        
    </>
  );
}

export default PageIngresoDoc;