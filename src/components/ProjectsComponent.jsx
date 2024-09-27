import React, { useEffect, useState, useRef } from "react";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import { keyframes } from "@mui/system";
import { motion } from "framer-motion";

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
      description: 'Página web desarrollada con VITE, utilizando Material-UI',
      url: 'https://eymlimitada.cl',
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-9508a.appspot.com/o/eymlimitada.jpg?alt=media&token=f74e651b-c563-4587-9619-1b045ea56b1c',
    },
    {
      title: 'Proyecto WellnessApp',
      description: 'Proyecto ecommerce creado con react, utilizando material-UI, react-router-dom, context, sweet alert y swiper. Conectado una base de datos en Firebase para la persistencia de datos.',
      url: 'https://wellnessapp.onrender.com',
      image: 'https://firebasestorage.googleapis.com/v0/b/wellnesgym-47cea.appspot.com/o/wellnesGym.gif?alt=media&token=ea58bc73-0c6e-4612-b47e-1d1eabeb941b',
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
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        width: "100vw",
        overflow: "hidden",
        backgroundImage:
          "url('https://www.hostingplus.com.co/wp-content/uploads/2021/11/editor_codigo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      }}
    >
      <Box
        ref={titleRef}
        sx={{
          position: "relative",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          padding: { xs: "20px", md: "40px" },
          borderRadius: "12px",
          maxWidth: { xs: "330px",sm: "600px", md: "800px"},
          width: "100%",
          textAlign: "center",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)",
          marginTop: { xs: '90px', sm: '50px', md: '150px', lg: '100px' },
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        {/* Título animado en formato JSON */}
        <Typography
          variant="h1"
          component="div"
          sx={{
            fontFamily: "monospace",
            fontWeight: "bold",
            color: "white",
            borderRight: "2px solid white",
            whiteSpace: "pre",
            overflow: "hidden",
            animation: `${typing} 4s steps(20) 1 normal both, ${blink} 0.75s step-end infinite`,
            fontSize: { xs: "35px", sm: "35px", md: "56px" },
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "30px",
            paddingRight: "0px",
            "&::before": {
              content: '"<"',
            },
            "&::after": {
              content: '"/>"',
            },
          }}
        >
          MisProyectos
        </Typography>
      </Box>

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
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                      fontWeight: "medium",
                      fontSize: "1.3rem",
                      fontWeight: "Bond",
                      textAlign: "justify",
                      marginTop: "60px",
                      marginLeft: "25px",
                      marginRight: "25px",
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Sombra en el texto
                      zIndex: 2, // Asegura que el texto esté por encima del fondo
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      //backgroundColor: "#1976d2",
                      color: "white",
                      borderRadius: "8px",
                      padding: "10px 20px",
                      margin: "60px 30px 0px 30px",
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
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProjectsComponent;
