import { useState, useEffect } from "react";
import styles from "../../styles/LoginReg.module.css";
import classes from "../../styles/Common.module.css";
import axios from "axios";
import Link from 'next/link';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = (props) => {
  const [enteredName, setName] = useState("");
  const [enteredUserName, setUserName] = useState("");
  const [enteredEmail, setEmail] = useState("");
  const [enteredPassword, setPassword] = useState("");

  useEffect(() => {}, []);

  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const UserNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
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
    const registerData = {
      name: enteredName,
      username: enteredUserName,
      email: enteredEmail,
      password: enteredPassword,
    };
    axios
      .post("http://localhost:3001/auth/register", registerData)
      .then((response) => {
        toast.success("User Created Succesfully!", toastConfig);
        setName("");
        setUserName("");
        setEmail("");
        setPassword("");
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        if (error.response?.status === 400) {
          toast.error("User Already Exist!", toastConfig);
        } else toast.error(error.response?.data.message, toastConfig);
      });
  };

  return (
    <>
      <div>
        <ToastContainer />
      </div>
      <div className={styles.regApp}>
        <div className={styles.authFormContainer}>
        <div className="text-3xl font-bold italic">Register</div>
          <form className={styles.registerForm} onSubmit={submitHandler}>
            <label htmlFor="name" className="font-bold mt-4">Full Name</label>
            <div className={classes.control}>
              <input
                type="text"
                placeholder="Enter your name"
                id="name"
                name="name"
                onChange={nameHandler}
                value={enteredName}
              />
            </div>

            <label htmlFor="username" className="font-bold mt-1">User Name</label>
            <div className={classes.control}>
              <input
                type="text"
                placeholder="User name"
                id="username"
                name="username"
                onChange={UserNameHandler}
                value={enteredUserName}
              />
            </div>
            <label htmlFor="email" className="font-bold mt-1">Email</label>
            <div className={classes.control}>
              <input
                type="email"
                placeholder="Enter your email"
                id="email"
                name="email"
                onChange={emailHandler}
                value={enteredEmail}
              />
            </div>
            <label htmlFor="password" className="font-bold mt-1">Password</label>
            <div className={classes.control}>
              <input
                type="password"
                placeholder="Enter 8 digit password"
                id="password"
                name="password"
                onChange={passwordHandler}
                value={enteredPassword}
              />
            </div>
            <div className={classes.actions}>
              <button
                className={`${styles.button} ${styles.regSubmit}`}
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
          <div className="mt-4 hover:text-red-800">
           <Link href="/login">Already Have Account? Login Here.</Link> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
