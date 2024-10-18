import "./App.css";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <main>
      <Home />
      <Register />
      <Login />
      <Navbar/>
    </main>
  );
}

export default App;
