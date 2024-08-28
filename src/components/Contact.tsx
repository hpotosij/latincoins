import React from 'react';
import '../assets/styles/Contact.scss';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function Contact() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/573209329959", "_blank");
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contáctanos</h1>
          <h2>Atención personalizada</h2>
          <h4>Puerto Asís, Colombia</h4>
          <h4>Correo: comercio@latincoins.com.co</h4>
          <h4>Teléfono: +57-320-932-9959</h4>
          
          <Button 
            onClick={handleWhatsAppClick}
            variant="contained" 
            endIcon={<SendIcon />}
            sx={{
              backgroundColor: '#25D366',
              padding: '10px 20px',
              borderRadius: '20px',
              color: '#FFFFFF',
              '&:hover': {
                backgroundColor: '#1EBE5B',
              }
            }}
          >
            Contáctanos por WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
