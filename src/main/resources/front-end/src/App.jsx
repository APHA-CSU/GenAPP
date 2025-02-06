import "./App.css";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ProjectsSidebar from "./components/Projects/ProjectsSidebar";
import ProjectsList from "./components/Projects/ProjectsList";
import SearchProjects from "./components/Projects/SearchProjects";

function App() {
  return (
    <main>
      <Navbar />
      <Home Footer={Footer} />
      <Projects
        Footer={Footer}
        ProjectsSidebar={ProjectsSidebar}
        SearchProjects={SearchProjects}
        ProjectsList={ProjectsList}
      />
      <Register />
      <Login />
    </main>
  );
}

export default App;
