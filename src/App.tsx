import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from './pages/PageHome';
import FrmLogin from './pages/PageLogin';
import PageRecoveryPwd from './pages/RecoveryPwd';
import PageResetPwd from './pages/ResetPwd';
import PageReembolsoHome from './pages/Reembolso/Home';
import PageReembolsoDetail from './pages/Reembolso/Detail';
import PageReembolsoPago from './pages/Reembolso/DatosPago';
import PageReembolsoSolicitud from './pages/Reembolso/Solicitud';
import PageIngresoDoc from './pages/Reembolso/IngresoDoc';
import PageExamenes from './pages/Reembolso/Examenes';
import PageResumenSolicitud from './pages/Reembolso/ResumenSolicitud';

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<FrmLogin/>} />
              <Route path="/passwordRecovery" element={<PageRecoveryPwd/>} />
              <Route path="/passwordReset" element={<PageResetPwd/>} />
              <Route path="/home" element={<PageHome/>} />
              <Route path="/reembolso" element={<PageReembolsoHome/>} />                    
              <Route path="/reembolso/detail" element={<PageReembolsoDetail/>} />    
              <Route path="/reembolso/pago" element={<PageReembolsoPago/>} />   
              <Route path="/reembolso/solicitud" element={<PageReembolsoSolicitud/>} />           
              <Route path="/reembolso/ingresosDoc" element={<PageIngresoDoc/>} />
              <Route path="/reembolso/examenes" element={<PageExamenes/>} />    
              <Route path="/reembolso/resumenSolicitud" element={<PageResumenSolicitud/>} />                                   
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
