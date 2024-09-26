import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { keyframes } from "@mui/system"; // Para la animación del texto
import { Link } from "react-router-dom";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = ["Acerca", "Proyectos", "Habilidades", "Contacto"];

  // Keyframes para la animación del texto
  const typing = keyframes`
    from { width: 0; }
    to { width: 100%; }
  `;

  const blink = keyframes`
    from, to { border-color: transparent; }
    50% { border-color: white; }
  `;

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "rgba(0, 0, 0, 0.7)", // Fondo negro translúcido
        backdropFilter: "blur(10px)", // Efecto blur en el fondo
        boxShadow: "none", // Sin sombra para un look limpio
        width: "100%",
        zIndex: 1200, // Mantener siempre encima de otros elementos
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo o Nombre con animación */}
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-start" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontFamily: "monospace",
                fontWeight: "bold",
                color: "white",
                borderRight: "2px solid white", // Añade un cursor simulando el typing
                paddingRight: "4px", // Reduce el espacio entre el texto y el cursor
                whiteSpace: "nowrap",
                overflow: "hidden",
                width: "auto",
                display: "inline-block",
                animation: `${typing} 4s steps(20) 1s 1 normal both, ${blink} 0.75s step-end infinite`,
                "&::before": {
                  content: '"<"',
                },
                "&::after": {
                  content: '"/>"',
                },
              }}
            >
              MaxiDev
            </Typography>
          </Box>

          {/* Enlaces Centrales en Desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center", flexGrow: 1, gap: 3 }}>
            {menuItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  letterSpacing: "0.1rem",
                  fontSize: "1rem",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.2)", // Hover translúcido
                  },
                }}
                component="a" // Añadiendo la etiqueta Link
                href={`#${item.toLowerCase()}`} // Enlaces de sección
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* Redes Sociales a la Derecha */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <IconButton color="inherit" href="https://twitter.com" target="_blank">
              <TwitterIcon sx={{ color: "white", "&:hover": { color: "#1DA1F2" } }} />
            </IconButton>
            <IconButton color="inherit" href="https://github.com/maxzirox" target="_blank">
              <GitHubIcon sx={{ color: "white", "&:hover": { color: "#333" } }} />
            </IconButton>
            <IconButton color="inherit" href="https://www.linkedin.com/in/maximiliano-guzman-81270a238/" target="_blank">
              <LinkedInIcon sx={{ color: "white", "&:hover": { color: "#0077b5" } }} />
            </IconButton>
          </Box>

          {/* Menú Hamburguesa para móviles */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Drawer para menú móvil */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index} onClick={handleDrawerToggle}>
              <Link to={`/${item}`}><ListItemText primary={item} /></Link>
            </ListItem>
          ))}
        </List>
        <Box sx={{ padding: 2, display: "flex", gap: 2 }}>
          <IconButton color="inherit" href="https://twitter.com" target="_blank">
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit" href="https://github.com/maxzirox" target="_blank">
            <GitHubIcon />
          </IconButton>
          <IconButton color="inherit" href="https://www.linkedin.com/in/maximiliano-guzman-81270a238/" target="_blank">
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
