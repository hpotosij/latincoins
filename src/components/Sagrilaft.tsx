import React from 'react';
import '../assets/styles/Section.scss';
import backgroundImage from '../assets/images/sagrilaft.png';

function Sagrilaft() {
  return (
    <section id="sagrilaft">
    <div className="section-container">
      <div className="background-container">
        <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
        <h1 className="section-title">Compromiso de Latincoins con las Políticas de SAGRILAFT</h1>
      </div>
      <div className="section-content">

        <p>
        En Latincoins nos comprometemos a cumplir con las políticas de SAGRILAFT para prevenir el lavado de activos y la financiación del terrorismo. Implementamos procedimientos rigurosos de identificación y verificación de usuarios, monitoreamos transacciones en tiempo real, y reportamos actividades sospechosas a las autoridades (UIAF). Además, capacitamos continuamente a nuestros empleados y protegemos la confidencialidad de la información de nuestros usuarios. Nuestro Oficial de Cumplimiento supervisa estas actividades, asegurando que se mantengan los más altos estándares de integridad y transparencia
        </p>
        <br/>
        <br/>

       
      </div>
    </div>
    </section>
  );
}
export default Sagrilaft;
