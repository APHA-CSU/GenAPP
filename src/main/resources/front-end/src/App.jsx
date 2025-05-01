import "./App.css";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import InformDashb from "./components/InformaticsDashboard/InformDashb";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main>
      <Navbar />
      <Home Footer={Footer} />
      <Projects Footer={Footer} />
      <InformDashb Footer={Footer} />
      <Register />
      <Login />
    </main>
  );
}

export default App;
