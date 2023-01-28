import { Container, Pagination } from 'react-bootstrap';
import HomeBar from '../../../components/homeBar';
import Tabla from '../../../components/tabla';

function PageReembolsoHome() {

  const act = true;
  const dataUltimosMov: string[][] = [
    ["() N° 251", "24-10-2023", "Cristian A. Cortes Sarmiento", "Ambulatoria", "En Proceso"],
    ["() N° 251", "24-10-2022", "Cristian A. Cortes Sarmiento", "Ambulatoria", "En Proceso"],
    ["() N° 251", "24-10-2020", "Cristian A. Cortes Sarmiento", "Ambulatoria", "Rechazado "],
    ["() N° 251", "24-10-2019", "Cristian A. Cortes Sarmiento", "Ambulatoria", "En Proceso"],
    ["() N° 251", "24-10-2022", "Cristian A. Cortes Sarmiento", "Ambulatoria", "En Proceso"],
    ["() N° 251", "24-10-2021", "Cristian A. Cortes Sarmiento", "Ambulatoria", "Rechazado "],
    ["() N° 251", "24-10-2023", "Cristian A. Cortes Sarmiento", "Ambulatoria", "En Proceso"],
    ["() N° 251", "24-10-2022", "Cristian A. Cortes Sarmiento", "Ambulatoria", "En Proceso"],
    ["() N° 251", "24-10-2020", "Cristian A. Cortes Sarmiento", "Ambulatoria", "Rechazado "],
    ["() N° 251", "24-10-2019", "Cristian A. Cortes Sarmiento", "Ambulatoria", "En Proceso"],
    ["() N° 251", "24-10-2022", "Cristian A. Cortes Sarmiento", "Ambulatoria", "En Proceso"],
    ["() N° 251", "24-10-2021", "Cristian A. Cortes Sarmiento", "Ambulatoria", "Rechazado "],
  ];

  return (
    <div>
        <HomeBar/>
        <Container>
            <div style={{height: "54px", display: 'flex', alignItems: 'center'}}>Reembolso en línea | historial de casos</div>
        </Container>         
        <Tabla 
          header="MIS REEMBOLSOS"
          columHeader={["Código", "Fecha Recepción", "Nombre", "Consultas", "Estado"]}
          data={dataUltimosMov}
          filter={true}
        /> 
    </div>
  );
}

export default PageReembolsoHome;