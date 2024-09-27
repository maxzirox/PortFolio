import { Box } from '@mui/material'
import React from 'react'

export const Background = ({Component}) => {
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
        <Component />

    </Box>
  )
}
