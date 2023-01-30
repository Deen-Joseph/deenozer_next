import { useState } from "react";
import classes from "../../styles/Common.module.css";
import styles from "../../styles/LoginReg.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import jwt_decode from 'jwt-decode';
import Link from 'next/link';
// import { useNavigate  } from "react-router-dom";

const Login = (props) => {
  const [enteredEmail, setEmail] = useState("");
  const [enteredPassword, setPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // const navigate = useNavigate()

  const emailHandler = (event) => {
    setEmail(event.target.value);

    setFormIsValid(
      event.target.values?.includes("@") && enteredPassword.trim().length > 7
    );
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 7 && enteredEmail?.includes("@")
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 7);
  };
  const toastConfig = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  const submitHandler = (event) => {
    event.preventDefault();    
        setEmail("");
        setPassword("");
    const loginData = {
      email: enteredEmail,
      password: enteredPassword,
    };
    axios
      .post("http://localhost:3001/auth/login", loginData)
      .then((response) => {
        const decoded = jwt_decode(response.data.access_token);
        toast.success(`Login Success! Welcome ${decoded.name} `, toastConfig);
        localStorage.setItem("access_token", response.data.access_token);
        if(response.data.access_token) navigate("/home");       
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401) {
          toast.error("Invalid Credentials, Unauthorized", toastConfig);
        } else toast.error(error.response.data.message, toastConfig);
      });
  };

  return (
    <>
      <div>
        <ToastContainer />
      </div>
      <div className={styles.logApp}>
        <div className={styles.authFormContainer}>
          <div className="text-3xl font-bold italic">Login</div>
          <form className={styles.loginForm} onSubmit={submitHandler}>
          <label htmlFor="email" className="font-bold mt-4">Email</label>
            <div
              className={`${classes.control} ${
                emailIsValid === false ? classes.invalid : ""
              }`}
            >
              
              <input
                type="email"
                placeholder="Enter your email"
                id="email"
                name="email"
                onChange={emailHandler}
                onBlur={validateEmailHandler}
                value={enteredEmail}
              />
            </div>

            {emailIsValid === false && (
              <p className={styles.valError}>Please check the Email</p>
            )}

<label htmlFor="password" className="font-bold mt-1">Password</label>
            <div
              className={`${classes.control} ${
                passwordIsValid === false ? classes.invalid : ""
              }`}
            >
              
              <input
                type="password"
                placeholder="********"
                id="password"
                name="password"
                onChange={passwordHandler}
                onBlur={validatePasswordHandler}
                value={enteredPassword}
              />
            </div>
            {passwordIsValid === false && (
              <p className="val-error">Please check the Password</p>
            )}

            <div className={classes.actions}>
              <button
                type="submit"
                className={styles.button}
                disabled={!formIsValid}
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-4 hover:text-red-800">
           <Link href="/register">New to here? Register Here.</Link> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
