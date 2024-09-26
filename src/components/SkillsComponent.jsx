import React, { useEffect, useState, useRef } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { keyframes } from "@mui/system";
import { motion } from "framer-motion";
import { FaJava, FaJsSquare, FaNodeJs, FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';

// Animaciones
const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: white; }
`;

const SkillsComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

  // Lista de skills con íconos y descripciones
  const skills = [
    { name: 'Java', icon: FaJava, description: 'Conocimiento avanzado en desarrollo Java.' },
    { name: 'JavaScript', icon: FaJsSquare, description: 'Experiencia en desarrollo con JavaScript.' },
    { name: 'Node.js', icon: FaNodeJs, description: 'Desarrollo de servidores y APIs con Node.js.' },
    { name: 'React', icon: FaReact, description: 'Desarrollo de aplicaciones web con React.' },
    { name: 'HTML', icon: FaHtml5, description: 'Dominio en la creación de estructuras web con HTML5.' },
    { name: 'CSS', icon: FaCss3Alt, description: 'Estilos avanzados y diseño responsivo con CSS3.' },
    { name: 'React Native', icon: FaReact, description: 'Desarrollo de aplicaciones móviles con React Native.' },
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
          maxWidth: { xs: "330px", sm: "600px", md: "800px" },
          width: "100%",
          textAlign: "center",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)",
          marginTop: { xs: "90px", sm: "50px", md: "150px", lg: "100px" },
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
          Skills
        </Typography>
      </Box>

      <Box
        sx={{
          padding: { xs: "20px", md: "40px" },
          borderRadius: "12px",
          maxWidth: { xs: "100%", sm: "80%", md: "70%" },
          textAlign: "center",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{
                width: "150px",
                height: "150px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                borderRadius: "12px",
                padding: "10px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Icon size={48} color="white" />
              <Typography
                variant="h6"
                sx={{ color: "white", marginTop: "10px", fontWeight: "bold" }}
              >
                {skill.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "white", textAlign: "center" }}>
                {skill.description}
              </Typography>
            </motion.div>
          );
        })}
      </Box>
    </Box>
  );
};

export default SkillsComponent;
