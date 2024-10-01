import { useSelector, useDispatch } from "react-redux";
import { setShowPage } from "../../features/securitySlice";
import "../Home/Home.css"
const Home = () => {
  const dispatch = useDispatch();
  const showHomePage = useSelector((state) => state.security.showHomePage);
console.log(showHomePage)
  return (
    <div className={showHomePage ? "home-container" : "hidden"}>
      <h1>GenAPP</h1>
      <div>
        <button
          id="register_btn"
          className="govuk-button"
          onClick={() => dispatch(setShowPage("register"))}
        >
          Register
        </button>
      </div>
      <div>
        <button
          id="login_btn"
          className="govuk-button"
          onClick={() => dispatch(setShowPage("login"))}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Home;
