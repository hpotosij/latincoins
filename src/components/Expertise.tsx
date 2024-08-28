import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { faMoneyCheck, faDollarSign } from '@fortawesome/free-solid-svg-icons'; 
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Negociación personalizada",
    "Eficiencia",
    "Discreción",
    "Seguridad",
    "Transparencia",
    "Cumplimiento",
];

const labelsSecond = [
    "Tasas de cambio bajas",
    "Rapidez",
    "Seguridad",
    "Pagos internacionales",
    "Giros",
];

const labelsThird = [
    "Punto físico",
    "Asesoramiento personalizado",
    "Transacción presencial",
    "Experiencia rápida y segura",

];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Servicios</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faBitcoin} size="3x"/>
                    <h3>Market Place OTC</h3>
                    <p>
                        En LATINCOINS S.A.S., ofrecemos exclusivo servicio OTC (Over-the-Counter) para la compra y venta de criptomonedas. Este servicio está diseñado para aquellos clientes que buscan realizar transacciones de gran volumen con total discreción, seguridad y eficiencia. A través de nuestro servicio OTC, proporcionamos precios competitivos y un proceso de negociación personalizado, asegurando una experiencia fluida y confidencial. Ya sea que necesite adquirir o liquidar grandes cantidades de criptomonedas, nuestro equipo de expertos está aquí para asesorarle y facilitar cada paso de la operación, garantizando la máxima transparencia y cumplimiento con las normativas vigentes.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Palabras claves:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMoneyCheck} size="3x"/>
                    <h3>Giros y Pagos Internacionales</h3>
                    <p>
                        En LATINCOINS S.A.S., ofrecemos servicio de giros y pagos internacionales diseñado para facilitar la transferencia de fondos a cualquier parte del mundo. Priorizamos tasas de cambio bajas, asegurando que obtenga el mejor valor por su dinero. Nuestra plataforma está optimizada para garantizar la rapidez en cada envío, permitiendo que sus transacciones se completen en el menor tiempo posible. Además, la seguridad es nuestra máxima prioridad; contamos con sistemas avanzados de protección de datos y procesos rigurosos para la transferencia de fondos. Confíe en LATINCOINS S.A.S. para manejar sus necesidades de giros y pagos internacionales con eficiencia, transparencia y confianza.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Palabras claves:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDollarSign} size="3x"/>
                    <h3>Intercambio en efectivo</h3>
                    <p>
                    En LATINCOINS S.A.S., ofrecemos servicio de negociación en efectivo en nuestros punto físico, diseñado para aquellos que prefieren realizar sus transacciones de criptomonedas de manera presencial. Este servicio le permite comprar o vender criptomonedas utilizando dinero en efectivo, asegurando una experiencia rápida, segura y discreta. Nuestro punto físico está equipado con personal capacitado que lo guiará en cada paso del proceso, brindándole asesoramiento personalizado y garantizando que su transacción se realice con total transparencia y seguridad. Con este servicio, LATINCOINS S.A.S. combina la conveniencia del comercio digital con la confianza de una transacción presencial.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Palabras claves:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;