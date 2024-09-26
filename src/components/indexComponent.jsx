import React, { useEffect, useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";

const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: white; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const IndexComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

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
    position: "relative", // Aseguramos que sea relativo al viewport.
    minHeight: "100vh", // Ocupa toda la altura de la ventana.
    width: "100vw", // Ocupa todo el ancho de la ventana.
    overflow: "hidden", // Oculta cualquier desbordamiento hacia los lados.
    backgroundImage:
      "url('https://www.hostingplus.com.co/wp-content/uploads/2021/11/editor_codigo.jpg')",
    backgroundSize: "cover", // Asegura que la imagen cubra todo el contenedor.
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 0, // Elimina cualquier margen.
    padding: 0, // Elimina cualquier padding que pueda causar desbordamiento.
    boxSizing: "border-box", // Asegura que el padding se incluya dentro del tamaño del box.
  }}
>

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
          marginTop: "30px", // Para que el texto esté más cerca del título
          marginLeft: "20px",
          marginRight: "20px"
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
            fontSize: { xs: "25px", sm: "35px", md: "56px" },
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "30px",
            paddingRight: "0px",
            "&::before": {
              content: '"{"',
            },
            "&::after": {
              content: '"}"',
            },
          }}
        >
        "Name": "Maxi Guzman",{"\n"}
        "Type": "Portfolio",{"\n"}
        "Skill": "Full Stack"
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
        {/* Texto adicional */}
        <Typography
          variant="body1"
          component="div"
          sx={{
            color: "white",
            textAlign: "justify",
            opacity: 0,
            animation: `${fadeIn} 1s forwards`,
            animationDelay: "1s",
            fontSize: { xs: "16px", md: "18px" },
            lineHeight: "1.6",
          }}
        >
          Como desarrollador full stack, diseño y construyo aplicaciones web completas desde el front-end hasta el back-end. Utilizo tecnologías modernas como React y React Native para crear interfaces de usuario interactivas, mientras que Node.js y bases de datos como MySQL o MongoDB me permiten manejar servidores y datos de manera eficiente. Soy capaz de integrar sistemas, optimizar el rendimiento y garantizar una experiencia de usuario fluida, siempre buscando aprender nuevas herramientas y técnicas para mejorar la calidad de mi código y los proyectos en los que participo.
        </Typography>
      </Box>
    </Box>
  );
};

export default IndexComponent;
