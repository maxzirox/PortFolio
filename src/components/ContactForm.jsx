import React, { useState, useRef } from 'react';
import { Box, Typography, TextField, Button, Modal, IconButton } from '@mui/material';
import { keyframes } from '@mui/system';
import { FaGithub, FaDev, FaLinkedin } from 'react-icons/fa';
import emailjs from 'emailjs-com';

// Animaciones
const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: white; }
`;

// Component ContactForm
const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const modalMessageRef = useRef(null);

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'El nombre es requerido';
    if (!formData.email) {
      formErrors.email = 'El correo es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'El correo no es válido';
    }
    if (!formData.message) formErrors.message = 'El mensaje es requerido';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await emailjs.send(
        'tu_service_id',
        'tu_template_id',
        formData,
        'tu_user_id'
      );
      setEmailSent(true);
    } catch (error) {
      setEmailSent(false);
    }
    setModalOpen(true);
    setIsSubmitted(true);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        width: '100vw',
        overflow: 'hidden',
        backgroundImage: 'url("https://www.hostingplus.com.co/wp-content/uploads/2021/11/editor_codigo.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: { xs: '20px', md: '40px' },
          borderRadius: '12px',
          maxWidth: { xs: '400px', sm: '600px', md: '800px' },
          width: '100%',
          textAlign: 'center',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.5)',
          marginTop: { xs: '90px', sm: '50px', md: '150px', lg: '100px' },
          marginLeft: '20px',
          marginRight: '20px',
        }}
      >
        {/* Título animado en formato JSON */}
        <Typography
          variant="h1"
          component="div"
          sx={{
            fontFamily: 'monospace',
            fontWeight: 'bold',
            color: 'white',
            borderRight: '2px solid white',
            whiteSpace: 'pre',
            overflow: 'hidden',
            animation: `${typing} 4s steps(20) 1 normal both, ${blink} 0.75s step-end infinite`,
            fontSize: { xs: '35px', sm: '35px', md: '56px' },
            textAlign: 'center',
            marginTop: '30px',
            marginBottom: '30px',
            paddingRight: '0px',
            "&::before": {
              content: '"<"',
            },
            "&::after": {
              content: '"/>"',
            },
          }}
        >
          ContactForm
        </Typography>
      </Box>

      {/* Formulario */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: { xs: '20px', md: '40px' },
          borderRadius: '12px',
          maxWidth: { xs: '400px', sm: '600px', md: '800px' },
          width: '100%',
          textAlign: 'center',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.5)',
          marginTop: { xs: '90px', sm: '50px', md: '150px', lg: '100px' },
        }}
      >
        <Typography
          variant="h2"
          component="div"
          sx={{
            fontFamily: 'monospace',
            fontWeight: 'bold',
            color: 'white',
            fontSize: { xs: '35px', sm: '35px', md: '56px' },
            textAlign: 'center',
            marginBottom: '30px',
            animation: `${typing} 4s steps(20) 1 normal both, ${blink} 0.75s step-end infinite`,
            borderRight: '2px solid white',
            whiteSpace: 'pre',
            overflow: 'hidden',
          }}
        >
          Contáctame
        </Typography>

        <TextField
          fullWidth
          label="Nombre"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          sx={{ marginBottom: '20px', backgroundColor: 'white', borderRadius: '4px' }}
        />
        <TextField
          fullWidth
          label="Correo"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          sx={{ marginBottom: '20px', backgroundColor: 'white', borderRadius: '4px' }}
        />
        <TextField
          fullWidth
          label="Mensaje"
          name="message"
          value={formData.message}
          onChange={handleChange}
          error={!!errors.message}
          helperText={errors.message}
          multiline
          rows={4}
          sx={{ marginBottom: '20px', backgroundColor: 'white', borderRadius: '4px' }}
        />

        <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '20px' }}>
          Enviar
        </Button>

        {/* Iconos de redes sociales */}
        <Box sx={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <IconButton href="https://github.com/maxzirox" target="_blank" color="inherit">
            <FaGithub size={30} />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/maximiliano-guzman-81270a238/" target="_blank" color="inherit">
            <FaLinkedin size={30} />
          </IconButton>
          <IconButton href="https://dev.to" target="_blank" color="inherit">
            <FaDev size={30} />
          </IconButton>
        </Box>
      </Box>

      {/* Modal de éxito o error */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            padding: '40px',
            borderRadius: '12px',
            textAlign: 'center',
          }}
        >
          <Typography
            ref={modalMessageRef}
            variant="h4"
            sx={{
              color: 'white',
              fontFamily: 'monospace',
              fontWeight: 'bold',
              fontSize: '30px',
              textAlign: 'center',
              whiteSpace: 'pre',
              overflow: 'hidden',
              borderRight: '2px solid white',
              animation: `${typing} 4s steps(30) 1 normal both, ${blink} 0.75s step-end infinite`,
            }}
          >
            {emailSent ? '¡Correo enviado exitosamente!' : 'Error al enviar el correo.'}
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default ContactForm;
