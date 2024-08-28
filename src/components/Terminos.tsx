import React from 'react';
import '../assets/styles/Section.scss';
import backgroundImage from '../assets/images/terminos.jpg';

function Terminos() {
  return (
    <div className="section-container">
      <div className="background-container">
        <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
        <h1 className="section-title">Condiciones de Comercio P2P de Binance por Latincoins</h1>
      </div>
      <div className="section-content">
        <p>Como usuario regular verificado en la plataforma P2P de Binance, usted acepta de manera libre, voluntaria y en su totalidad las condiciones especificadas en este anuncio para la compra y/o transferencia de activos virtuales dentro de los exchange  en los que operamos. La aceptación de estas condiciones formaliza el CONTRATO DE MANDATO PARA ACTIVOS VIRTUALES, a través del cual Latincoins recibe una COMISIÓN por el intercambio de activos virtuales realizado en esta plataforma P2P.</p>
        <p>
          <h3>Información y Debida Diligencia</h3>  
          Latincoins solicitará información personal y bancaria para cumplir con las normativas de debida diligencia y conocimiento del cliente. Esto es fundamental para prevenir el lavado de dinero, la financiación del terrorismo y la proliferación de armas de destrucción masiva dando cumplimiento a nuestras políticas AML. Al aceptar el CONTRATO DE MANDATO PARA ACTIVOS VIRTUALES, usted consiente el tratamiento de sus datos personales y permite la consulta en bases de datos correspondientes.
        </p>
        <p><h3>Aceptación de Términos y Condiciones</h3>
        Al registrarse en Binance y utilizar los servicios de intercambio de criptomonedas ofrecidos por Latincoins en el comercio P2P, usted acepta de manera expresa los términos y condiciones del Contrato de Mandato, que está disponible en el anuncio del comercio P2P. Este contrato regula las transacciones de compra y venta de criptomonedas y establece las obligaciones y derechos de ambas partes involucradas.
        </p>
        <p><h3>Términos y Condiciones</h3>
          <strong>Aceptación del Contrato de Mandato:</strong> Al seleccionar y presionar el botón de compra o venta dentro del P2P de Binance o cualquier otro exchage en el que estemos operando, usted confirma que ha leído, comprendido y acepta totalmente los términos del contrato de mandato, que a la vez se considera aceptado y firmado digitalmente por ambas partes.
          <br /><br /><strong>Validez Jurídica:</strong>  Este contrato electrónico tiene la misma validez que un contrato físico, conforme a lo establecido por la Ley 527 de 1999 y el Decreto 2364 de 2012.
          <br /><br /><strong>Consentimiento para el Tratamiento de Datos:</strong>  De acuerdo con la Ley 1581 de 2012, usted otorga su consentimiento expreso e informado para el tratamiento de sus datos personales, en conformidad con nuestras políticas de privacidad y manejo de datos.
          <br /><br /><strong>Envío de Copia del Contrato:</strong> Después de aceptar el anuncio y completar la transacción, se enviará una copia del contrato de mandato a su correo electrónico registrado por solicitud del contratante. Este contrato estará firmado electrónicamente por Latincoins y usted, al ingresar al anuncio y generar la orden, reconoce y acepta esta firma digital como válida y vinculante.
          <br /><br /><strong>Obligaciones y Derechos:</strong> Este contrato regula las transacciones de compra y venta de criptomonedas en la plataforma P2P de Binance y otros exchage donde tenemos actividad, ademas se define claramente las obligaciones y derechos de ambas partes.
        </p>

      </div>
    </div>
  );
}

export default Terminos;
