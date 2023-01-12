import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from './constants/theme';




export const App: React.FC = () => {

  return (
    <>
      <ThemeProvider theme={theme}>

      </ThemeProvider>
    </>
  )
}

