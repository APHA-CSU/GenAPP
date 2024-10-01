import { useRef, useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import "../Login/Login.css";
import { useSelector, useDispatch } from "react-redux";
import { setShowPage } from "../../features/securitySlice";

const Login = () => {
  const dispatch = useDispatch();
  const showLoginPage = useSelector((state) => state.security.showLoginPage);

  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSucess] = useState(false);

  //Focus on email input when component loads
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  //Clear out error message when `email`or `pwd` changes as user  has read error message & adjusting to make changes
  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  const handleSubmit = async (e) => {
    //prevents reloading of the page on form submit
    e.preventDefault();

    setEmail("");
    setPwd("");
    setSucess(true);
  };
  return (
    <div className={showLoginPage ? "login-container" : "hidden"}>
      <div className="left-half" />
      <div className="right-half" />
      <div className="content-container">
        <Grid
          container
          spacing={12}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={6} md={6} className="welcomeGrid">
            <h1 style={{ color: "#fff" }}>Welcome!</h1>
            <br />
            <h2 style={{ color: "#fff" }}>
              GenAPP: your gateway to understanding animal and plant pathogen
              evolution.
            </h2>
          </Grid>
          <Grid item xs={8} md={4} className="loginGrid">
            <button
              id="back-btn"
              className="govuk-button"
              onClick={() => {
                dispatch(setShowPage("home"));
              }}
            >
              Back
            </button>
            {success ? (
              <section>
                <p>
                  Successfully logged in
                  <br />
                  <button
                    id="home-page-btn"
                    className="govuk-button"
                    onClick={() => dispatch(setShowPage("home"))}
                  >
                    Go to Home
                  </button>
                </p>
              </section>
            ) : (
              <section>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
                  {errMsg}
                </p>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="login_email">Email:</label>
                  <input
                    id="login_email"
                    name="login_email"
                    type="text"
                    ref={emailRef}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                  <label htmlFor="login_pwd">Password:</label>
                  <input
                    id="login_pwd"
                    name="login_pwd"
                    type="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                  />
                  <button
                    id="btn_signin"
                    className="govuk-button"
                    disabled={!email || !pwd ? true : false}
                  >
                    Sign In
                  </button>
                </form>
                <div className="signup-box">
              <p>
                New user? {""}
                <button
                  id="register-page-btn"
                  className="govuk-button"
                  onClick={() => dispatch(setShowPage("register"))}
                >
                  Register
                </button>
              </p>
            </div>
              </section>
            )}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Login;
