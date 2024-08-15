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

  //Validate email name by testing against EMAIL_REGEX
  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  //Validate pwd by testing against PWD_REGEX
  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  //Clear out error message when email changes `email`,`pwd` or `matchPwd` as email has read error message & adjusting to make changes
  useEffect(() => {
    setErrMsg("");
  }, [email, pwd, matchPwd]);

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
            <form></form>
          </section>
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;
