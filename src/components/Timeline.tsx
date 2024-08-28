import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Nosotros</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
           
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">¿Quiénes somos?</h3>
            <p>
            En LATINCOINS S.A.S., somos líderes en el comercio de criptomonedas, comprometidos con proporcionar un acceso seguro y eficiente al mundo de las criptodivisas. Nuestra principal actividad es facilitar el intercambio entre dinero Fiat y criptomonedas, ya sea que nuestros clientes busquen convertir su moneda local en activos digitales o viceversa. Ofrecemos una plataforma confiable y de fácil uso, respaldada por un equipo de expertos en el sector, dedicados a brindar un servicio excepcional y a garantizar la satisfacción de nuestros clientes. Con un enfoque en la transparencia y seguridad, LATINCOINS S.A.S. se esfuerza por ser su socio de confianza en el dinámico y en constante crecimiento mercado de las criptomonedas.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Nuestra Visión</h3>
            <p>
            Ser el líder en la prestación de servicios financieros innovadores y seguros, facilitando el acceso al mundo de las criptomonedas y todas sus posibilidades con la máxima eficiencia, transparencia y confianza. Buscamos transformar el panorama financiero mediante la integración de tecnologías avanzadas y un enfoque centrado en el cliente, contribuyendo al crecimiento y la adopción de las criptomonedas en el mercado global. Nos comprometemos a ser el socio preferido para quienes buscan soluciones financieras ágiles y seguras en un mundo cada vez más digital.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Nuestra Misión</h3>
            <p>
            Proveer servicios financieros de alta calidad en el ámbito de las criptomonedas y el intercambio de dinero Fiat, ofreciendo soluciones seguras, rápidas y eficientes para la compra, venta y transferencia de activos digitales. Nos dedicamos a simplificar el acceso y la gestión de criptomonedas, garantizando un servicio transparente y confiable a nuestros clientes. A través de la innovación tecnológica y un enfoque personalizado, buscamos satisfacer las necesidades financieras de nuestros usuarios, promoviendo el crecimiento y la integración de las criptomonedas en el mercado global.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;