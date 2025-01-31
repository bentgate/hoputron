"use client"
import { createTheme } from "@mui/material/styles";

// Futuristic Beer & Hops Theme
const theme = createTheme({
  palette: {
    mode: "light", // Light mode by default, can toggle to dark
    primary: {
      main: "#1B5E20", // Deep Hop Green
      contrastText: "#F1F8E9",
    },
    secondary: {
      main: "#FFB300", // Golden Amber for Beer
    },
    background: {
      default: "#FDF3E7", // Light Wheat Background
      paper: "#FFFFFF", // Bright white for contrast
    },
    text: {
      primary: "#1B1B1B", // Dark for readability
      secondary: "#6D6D6D",
    },
    info: {
      main: "#00E5FF", // Futuristic Neon Blue
    },
  },
  typography: {
    fontFamily: "'Orbitron', 'Poppins', sans-serif", // Modern and sleek font
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      textTransform: "uppercase",
      color: "#1B5E20",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
      textTransform: "uppercase",
      color: "#FFB300",
    },
    body1: {
      fontSize: "1.1rem",
      lineHeight: 1.6,
      color: "#333333",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          textTransform: "none",
          fontWeight: "bold",
          boxShadow: "0px 4px 15px rgba(0, 229, 255, 0.3)", // Futuristic glow
          "&:hover": {
            backgroundColor: "#FFC107", // Bright Amber on Hover
            boxShadow: "0px 4px 20px rgba(255, 193, 7, 0.5)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          boxShadow: "0px 6px 15px rgba(0,0,0,0.1)",
          border: "1px solid rgba(255, 179, 0, 0.2)",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.02)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#1B5E20", // Hop Green AppBar
          boxShadow: "0 2px 10px rgba(0, 229, 255, 0.3)",
        },
      },
    },
  },
});

export default theme;
