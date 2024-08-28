import React from 'react';
import '../assets/styles/Section.scss';
import backgroundImage from '../assets/images/aml.png';

function Antilavado() {
  return (
    <div className="section-container">
      <div className="background-container">
        <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
        <h1 className="section-title">Política AML para Latincoins</h1>
      </div>
      <div className="section-content">
        <p>
        Latincoins se compromete a prevenir, detectar y reportar actividades de lavado de dinero y financiación del terrorismo en cada comercio de criptomonedas, bien sea P2P o Fiat. Nuestro Oficial de Cumplimiento supervisará la implementación de esta política y reportará directamente al Comité de Riesgos y al Consejo de Administración. Todos los empleados deben seguir los procedimientos establecidos y participar en capacitaciones continuas.
        </p>
        
        <p>
          Para la identificación y verificación de clientes, todos los usuarios deben proporcionar información personal verificable, incluyendo documentación oficial y, si es posible, verificación biométrica.
        </p>
        
        <p>
        Implementaremos sistemas tecnológicos para el monitoreo en tiempo real de las transacciones, con alertas automáticas para detectar actividades sospechosas. Aplicaremos debida diligencia simplificada para clientes de bajo riesgo y debida diligencia ampliada para aquellos de alto riesgo, verificando la fuente de fondos y la naturaleza de las transacciones.      
        </p>

        <p>
        Estableceremos un canal seguro para que los empleados reporten actividades sospechosas al Oficial de Cumplimiento, quien será responsable de reportarlas a las autoridades competentes según la legislación vigente.

        </p>

        <p>
        Ofreceremos capacitación continua a nuestros empleados sobre las prácticas AML y concientización a los usuarios sobre los riesgos y las medidas de seguridad implementadas. Además, protegeremos la información personal y financiera de nuestros usuarios contra accesos no autorizados y pérdidas accidentales
        </p>

      </div>
    </div>
  );
}
export default Antilavado;




