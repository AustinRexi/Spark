import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import ResponsiveAppBar from "./components/Navbar/nav";
import { teal, grey } from "@mui/material/colors";
import Body from "./components/Body/body";
import Shadow from "./components/Shadow/Shadow";
import Middle from "./components/Shadow/Middle";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#094938",
      light: "#CCF3E5",
      textcolor: "#fafafa",
    },
    secondary: {
      main: "#27AE60",
    },
    tertiary: {
      main: "#FFC501",
      light: "#FFF3CC",
      backgroundColor: "#fafafa",
    },
    white: {
      main: teal[400],
      light: teal[400],
    },
    bright: {
      main: grey[50],
      light: grey[50],
      textcolor: "#fafafa",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <ResponsiveAppBar enableColorOnDark />
        <Body />
        <Shadow />
      </div>
    </ThemeProvider>
  );
}

export default App;
