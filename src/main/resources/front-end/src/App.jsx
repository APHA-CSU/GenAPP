import "./App.css";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import InformDashb from "./components/InformaticsDashboard/InformDashb";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HelpPage from "./components/Help&Support/HelpPage";

function App() {
  return (
    <main>
      <Navbar />
      <Home Footer={Footer} />
      <Projects Footer={Footer} />
      <InformDashb Footer={Footer} />
      <Register />
      <Login />
      <HelpPage Footer={Footer}/>
    </main>
  );
}

export default App;
