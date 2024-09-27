import React, { useEffect, useState, useRef } from "react";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import { keyframes } from "@mui/system";
import { motion } from "framer-motion";
import { TitlePage } from "../partials/TitlePage";

// Animaciones
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: white; }
`;

const ProjectsComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

  // Lista de proyectos con imagen de fondo
  const projects = [
    {
      title: 'E&M limitada',
      description: 'Página web desarrollada con Vite y Material-UI, enfocada en una experiencia moderna y eficiente.',
      url: 'https://eymlimitada.cl',
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-9508a.appspot.com/o/eymlimitada.jpg?alt=media&token=f74e651b-c563-4587-9619-1b045ea56b1c',
    },
    {
      title: 'Proyecto WellnessApp',
      description: 'Ecommerce creado con React, utilizando Material-UI, React Router, Context, Sweet Alert y Swiper. Integra Firebase para la persistencia de datos.',
      url: 'https://github.com/maxzirox/WellnessApp',
      image: 'https://firebasestorage.googleapis.com/v0/b/wellnesgym-47cea.appspot.com/o/wellnesGym.gif?alt=media&token=ea58bc73-0c6e-4612-b47e-1d1eabeb941b',
    },
    {
      title: 'Proyecto ecommerceApp',
      description: 'Aplicación de ecommerce desarrollada en React Native, usando Material-UI, Redux, React Navigation, Image Picker y Swiper. Conexión a Firebase para almacenar datos.',
      url: 'https://github.com/maxzirox/CoderApp',
      image: 'https://firebasestorage.googleapis.com/v0/b/wellnesgym-47cea.appspot.com/o/kpc.jpg?alt=media&token=141eff94-498a-47fa-ac7c-3528e703ee86',
    },
    {
      title: 'Mi canasta Express',
      description: 'Proyecto web desarrollado con Vite, utilizando Tailwind CSS, React Router, EmailJS y Swiper para crear una experiencia fluida y funcional.',
      url: 'https://github.com/maxzirox/Mi_Canasta_Expressp',
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-9508a.appspot.com/o/micanastaexpress.jpg?alt=media&token=a9af4ae1-8f9d-4871-bd5a-1ac6a018e897',
    },
    // Agrega más proyectos aquí
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <>
      <TitlePage Title={"MyProjects"} />

      <Box
        ref={titleRef}
        sx={{
          position: "relative",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          padding: { xs: "20px", md: "40px" },
          borderRadius: "12px",
          maxWidth: {xs: "330px",sm: "600px", md: "800px"},
          width: "100%",
          textAlign: "center",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)",
          marginTop: { xs: '90px', sm: '50px', md: '150px', lg: '100px' },
          overflowX: "auto", // Habilitar el desplazamiento horizontal
          whiteSpace: "wrap", // Asegura que las tarjetas se alineen en una línea
          marginBottom: "50px"
        }}
      >
        <Grid container spacing={3} sx={{ marginTop: "20px", display: "inline-flex" }}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={6} key={index} sx={{ display: "inline-block" }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                      marginBottom: "20px",
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Sombra en el texto
                      zIndex: 2, // Asegura que el texto esté por encima del fondo
                    }}
                  >
                    {project.title}
                  </Typography>
                <Paper
                  elevation={3}
                  sx={{
                    position: "relative",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "white",
                    borderRadius: "12px",
                    textAlign: "center",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)",
                    margin: {xs: "10px"},
                    height: "350px", // Altura de la tarjeta
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    overflow: "hidden",
                    // Efecto de desenfoque en la imagen de fondo
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "blur(2px)", // Desenfoque
                      zIndex: 1,
                    },
                    zIndex: 2, // Asegura que el contenido esté por encima
                  }}
                >
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                      color: 'aliceblue',
                      fontSize: "1.3rem",
                      fontWeight: "Bold",
                      textAlign: "justify",
                      marginTop: "30px",
                      marginLeft: "25px",
                      marginRight: "25px",
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)', // Sombra en el texto
                      zIndex: 2, // Asegura que el texto esté por encima del fondo
                    }}
                  >
                    {project.description}
                  </Typography>
                </Paper>
                <Button
                    variant="outlined"
                    sx={{
                      //backgroundColor: "#1976d2",
                      color: "white",
                      borderRadius: "8px",
                      padding: "10px 20px",
                      margin: "0px 30px 0px 30px",
                      fontWeight: "bold",
                      fontSize: "17px",
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                      zIndex: 2, // Asegura que el botón esté por encima del fondo
                      '&:hover': {
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                        backgroundColor: "rgba(255, 255, 255, 0.2)", // Hover translúcido
                      },
                    }}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver proyecto
                  </Button>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ProjectsComponent;
