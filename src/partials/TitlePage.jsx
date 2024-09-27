import { Box, Typography } from '@mui/material'
import { keyframes } from '@mui/system';
import React from 'react'

// Animaciones
const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: white; }
`;

export const TitlePage = ({Title}) => {
  return (
    <Box
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
          {Title}
        </Typography>
      </Box>
  )
}
