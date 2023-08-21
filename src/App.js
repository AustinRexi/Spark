import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import ResponsiveAppBar from "./components/Navbar/nav";
import { amber, red, teal } from "@mui/material/colors";
import Body from "./components/Body/body";
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
    },
    white: {
      main: teal[400],
      light: teal[400],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ResponsiveAppBar enableColorOnDark />
        <Body />
      </div>
    </ThemeProvider>
  );
}

export default App;
