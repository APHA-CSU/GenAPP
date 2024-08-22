import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Grid from "@mui/material/Grid";

//Validate email & password
const EMAIL_REGEX = /^[a-z]{2,}(-[a-z]{2,})?(\.[a-z]{2,}(-[a-z]{2,})?)?@[a-z]{2,}\.[a-z]{2,}(\.[a-z]{2,})?$/;
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
  };

  return (
    <div>
      <Grid>
        <Grid item xs={6} md={6} className="welcomeGrid">
          <h1 style={{ color: "#fff" }}>Welcome!</h1>
          <br />
          <h2 style={{ color: "#fff" }}>
            GenAPP your gateway to understanding animal and plant pathogen
            evolution.
          </h2>
        </Grid>
        <Grid item xs={8} md={4} className="register-grid">
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
                className={
                  emailFocus && email && !validEmail
                    ? "instructions"
                    : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                Please enter a valid organisation email.
              </p>
            </form>
          </section>
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;
