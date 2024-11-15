import "./App.css";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main>
      <Navbar />
      <Home Footer={Footer} />
      <Register />
      <Login />
    </main>
  );
}

export default App;
