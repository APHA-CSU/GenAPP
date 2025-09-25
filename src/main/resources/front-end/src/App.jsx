import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import InformDashb from "./components/InformaticsDashboard/InformDashb";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Help from "./components/Help/Help";
import SecurityModal from "./components/Security Modal/SecurityModal";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: '"GDS Transport", arial, sans-serif',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <SecurityModal />
      <Navbar />
      <Home Footer={Footer} />
      <Projects Footer={Footer} />
      <InformDashb Footer={Footer} />
      <Register />
      <Login />
      <Help Footer={Footer} />
    </ThemeProvider>
  );
}

export default App;
