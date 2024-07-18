import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#8a8eb1",
    },
    secondary: {
      main: "#6d6b6b",
    },
    text: {
      primary: "#cebdbd",
      secondary: "rgba(195,184,184,0.7)",
      disabled: "rgba(224,216,216,0.5)",
      hint: "#e0c2c2",
    },
    success: {
      main: "#03f303",
    },
    background: {
      default: "#060620",
      paper: "#121212",
    },
    error: {
      main: "#c7190b",
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
