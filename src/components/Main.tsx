import React, { useState } from 'react';
import { Modal, Box, Typography, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import '../assets/styles/Main.scss';
import logo from '../assets/images/logo.jpeg';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80vw',
  height: '80vh',
  boxShadow: 24,
};

function Main() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="container" id="main">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={logo} alt="Avatar" />
        </div>
        <div className="content">
          <h1>Latincoins</h1>
          <p>El mundo de las criptomonedas en tus manos</p>

          <Button 
            variant="contained" 
            color="inherit" 
            onClick={handleOpen}
            sx={{ mt: 2 }}
          >
            VIGILADOS POR LA UIAF
          </Button>

          <div className="mobile_social_icons">
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            ...style,
            position: 'relative',
            width: '100vw', 
            height: '80vh', 
            overflowY: 'auto'
          }}
          className="modal-container"
>
          <div className="modal-background"></div>
          <div className="modal-content">
            <IconButton
              onClick={handleClose}
              sx={{ position: 'absolute', top: 8, right: 8 }}
            >
              <CloseIcon />
            </IconButton>
            <Typography id="modal-title" variant="h6" component="h3">
        
              <h3>VIGILADOS POR LA UIAF</h3 >
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }} className='modal-container1'>
              <b/>
              <p>
                En LATINCOINS S.A.S., estamos dedicados a implementar medidas que aseguren la gestión de operaciones comerciales relacionadas con la venta, compra, intermediación y custodia de Activos Virtuales, minimizando los riesgos asociados al Lavado de Activos y la Financiación del Terrorismo (LA/FT).
              </p>
              <p>
                Esta iniciativa responde a la necesidad actual en nuestro país de establecer procedimientos, controles y reportes para individuos y entidades que comercian con Activos Virtuales (AV), con el fin de prevenir actividades ilícitas.
              </p>
              <p>
                Dada la amenaza que representan actividades criminales internacionales, como el terrorismo, lavado de activos y corrupción, se ha incrementado el número de entidades obligadas a adoptar medidas de prevención, detección y control del lavado de activos.
              </p>
              <p>
                El uso de activos virtuales en la economía plantea un desafío en la prevención y combate del lavado de activos y la financiación del terrorismo. En Colombia, aunque no existe una legislación específica para los AV, se aplican normativas generales, como la Ley de Financiamiento (Ley 1943 de 2018), que ofrece incentivos fiscales a empresas en desarrollo tecnológico.
              </p>
              <p>
                La Unidad de Información y Análisis Financiero (UIAF) introdujo la Resolución 314 de 2021, que obliga a los proveedores de servicios de activos virtuales a reportar ciertas actividades. Esta resolución aplica a personas naturales y jurídicas involucradas en:
              </p>  
              <ul>
                <li>Intercambios entre AV y monedas fiduciarias o viceversa;.</li>
                <li> Intercambios entre diferentes formas de AV.</li>
                <li>Transferencias de AV.</li>
                <li>Custodia o administración de AV o instrumentos de control sobre estos.</li>
                <li>Servicios financieros relacionados con la oferta o venta de AV.</li>
                <li>Otros servicios relacionados con AV</li>
              </ul>
              <p>
                LATINCOINS S.A.S., registrado como PROVEEDOR DE SERVICIOS DE ACTIVOS VIRTUALES (PSAV) ante la UIAF y operando tanto a nivel nacional como internacional, se compromete a adherirse a las normativas de GAFILAT para mitigar los riesgos de LA/FT asociados a las operaciones con AV. Esto incluye la implementación de un Sistema de Autocontrol y Gestión del Riesgo Integral de Lavado de Activos, Financiación del Terrorismo y Financiamiento de la Proliferación de Armas de Destrucción Masiva (SAGRILAFT LA/FT/FPADM).
              </p>      
              <p>
                Aunque LATINCOINS S.A.S. no está obligada a implementar este sistema, ha decidido hacerlo voluntariamente para cumplir con la Resolución 314 de 2021 de la UIAF y la Circular 100-000016 de 2020 de la Superintendencia de Sociedades.
              </p>
              <p>
                Así, mediante su Manual del Sistema SAGRILAFT LA/FT/FPADM, LATINCOINS S.A.S. ha establecido medidas, procedimientos y protocolos de prevención y control para evitar que la organización sea utilizada para blanquear dinero proveniente de actividades ilícitas o para financiar actividades terroristas.
              </p>
            </Typography>
            <Button onClick={handleClose} sx={{ mt: 2 }}>
              Cerrar
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Main;
