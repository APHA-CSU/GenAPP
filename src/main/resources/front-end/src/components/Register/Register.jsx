import { useRef, useState, useEffect } from "react";
import "../Register/Register.css";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Grid from "@mui/material/Grid";

//Validate email & password
const EMAIL_REGEX =
  /^[a-z]{2,}(-[a-z]{2,})?(\.[a-z]{2,}(-[a-z]{2,})?)?@[a-z]{2,}\.[a-z]{2,}(\.[a-z]{2,})?$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");

  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  //Focus on email input when component loads
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  //Validate email by testing against EMAIL_REGEX
  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email.toLowerCase()));
  }, [email]);

  //Validate pwd by testing against PWD_REGEX
  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  //Clear error message when user changes `email`,`pwd` or `matchPwd` as user has read error message & is making changes
  useEffect(() => {
    setErrMsg("");
  }, [email, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //If button enabled with hacking check valid email & pwd
    const v1 = EMAIL_REGEX.test(email);
    const v2 = PWD_REGEX.test(pwd);

    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    setSuccess(true);
  };

  return (
    <div className="page-container">
      <div className="left-half" />
      <div className="right-half" />
      <div className="content-container">
        <Grid
          container
          spacing={12}
          className="register-container"
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
          <Grid item xs={8} md={4} className="registerGrid">
            {success ? (
              <section>
                <h1>Successfully Registered</h1>
                <p>
                  <a href="#">Sign In</a>
                </p>
              </section>
            ) : (
              <section>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
                  {errMsg}
                </p>
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="email">
                    Email:
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={validEmail ? "valid" : "hide"}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={validEmail || !email ? "hide" : "invalid"}
                    />
                  </label>
                  <input
                    type="text"
                    id="email"
                    ref={emailRef}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                  />
                  <p
                    id="emailnote"
                    className={
                      emailFocus && email && !validEmail
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Please enter a valid organisation email.
                  </p>
                  <label htmlFor="password">
                    Password:
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={validPwd ? "valid" : "hide"}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={validPwd || !pwd ? "hide" : "invalid"}
                    />
                  </label>
                  <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                  />
                  <p
                    id="pwdnote"
                    className={
                      pwdFocus && !validPwd ? "instructions" : "offscreen"
                    }
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    8 to 24 characters.
                    <br />
                    Must include uppercase and lowercase letters, a number and a
                    special character.
                    <br />
                    Allowed special characters: <span>!</span> <span>@</span>{" "}
                    <span>#</span> <span>$</span> <span>%</span>
                  </p>
                  <label htmlFor="confirm_pwd">
                    Confirm Password:
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={validMatch && matchPwd ? "valid" : "hide"}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={validMatch || !matchPwd ? "hide" : "invalid"}
                    />
                  </label>
                  <input
                    type="password"
                    id="confirm_pwd"
                    onChange={(e) => setMatchPwd(e.target.value)}
                    value={matchPwd}
                    required
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                  />
                  <p
                    id="confirmnote"
                    className={
                      matchFocus && !validMatch ? "instructions" : "offscreen"
                    }
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Must match the first password input field.
                  </p>
                  <button
                  className="govuk-button"
                  id="btn_signup"
                    disabled={
                      !validEmail || !validPwd || !validMatch ? true : false
                    }
                  >
                    Sign Up
                  </button>
                  <p>
                    Already registered?
                    <br />
                    <span className="line">
                      <a href="#">Sign In</a>
                    </span>
                  </p>
                </form>
              </section>
            )}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Register;
