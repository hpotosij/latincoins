import React from 'react';
import '../assets/styles/Section.scss';
import backgroundImage from '../assets/images/privacidad.jpg';

function Privacidad() {
  return (
    <div className="section-container">
      <div className="background-container">
        <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
        <h1 className="section-title">Política de Privacidad para Latincoins</h1>
      </div>
      <div className="section-content">
        
        <p>
          <h3>Introducción</h3>
          En Latincoins, nos comprometemos a proteger la privacidad y seguridad de los datos personales de nuestros usuarios. Esta política de privacidad describe cómo recopilamos, usamos, compartimos y protegemos su información, dando cumplimiento a la Ley 1581 de 2012 y el Decreto 1377 de 2013.
        </p>

        <p>
          <h3>Recopilación de Información</h3>
          Recopilamos información personal de nuestros usuarios cuando se registran en nuestra plataforma, incluyendo:
          <ul>
                <li>Datos de identificación personal: nombre, dirección, correo electrónico, número de teléfono.</li>
                <li>Información financiera: detalles de cuentas bancarias y transacciones.</li>
                <li>Información adicional para verificar la identidad: documentación oficial y, en algunos casos, datos biométricos.</li>
        </ul>
        </p>
        <p>
          <h3>Uso de la Información</h3>
          Utilizamos la información recopilada para:
          <ul>
                <li>Verificar la identidad de los usuarios y cumplir con nuestras obligaciones KYC y AML.</li>
                <li>Facilitar y procesar transacciones en nuestra plataforma.</li>
                <li>Proporcionar soporte al cliente y mejorar nuestros servicios.</li>
                <li>Cumplir con las leyes y regulaciones aplicables.</li>
        </ul>
        </p>

        <p>
          <h3>Compartir Información</h3>
          No compartimos la información personal de nuestros usuarios con terceros, excepto en los siguientes casos:
          <ul>
                <li>Con proveedores de servicios que nos ayudan a operar nuestra plataforma y cumplir con nuestras obligaciones legales, siempre que estos proveedores se comprometan a proteger la información de acuerdo con esta política.</li>
                <li>- Con autoridades competentes cuando sea requerido por ley o para proteger nuestros derechos legales.</li>
                
        </ul>
        </p>

        <p>
          <h3>Seguridad de la Información</h3>
          mplementamos medidas de seguridad técnicas y organizativas para proteger la información personal de nuestros usuarios contra accesos no autorizados, pérdida, alteración o destrucción. Estas medidas incluyen:
          <ul>
                <li>Encriptación de datos en tránsito y en reposo.</li>
                <li>Control de acceso restringido a la información personal.</li>
                <li>Monitoreo y auditoría regular de nuestros sistemas de seguridad.</li>
           </ul> 
        </p>

        <p>
          <h3>Retención de Información</h3>
          Retenemos la información personal de nuestros usuarios mientras sea necesario para cumplir con los fines descritos en esta política, o según lo requiera la ley. Una vez que la información ya no sea necesaria, la eliminaremos de manera segura.
        </p>

        <p>
          <h3>Derechos de los Usuarios</h3>
          Los usuarios tienen derecho a:
          <ul>
                <li>Acceder a su información personal que mantenemos.</li>
                <li>Solicitar la corrección de cualquier información inexacta.</li>
                <li>Solicitar la eliminación de su información personal, sujeto a ciertas limitaciones legales.</li>
                <li>Oponerse al procesamiento de su información personal en algunas circunstancias.</li>
          </ul>
        </p>

        <p>
          <h3>Actualizaciones a esta Política</h3>
          Podemos actualizar esta política de privacidad de vez en cuando para reflejar cambios en nuestras prácticas o en las leyes aplicables. Notificaremos a los usuarios sobre cualquier cambio importante a través de nuestra plataforma o por correo electrónico.
        </p>
        
      </div>
    </div>
  );
}
export default Privacidad;
