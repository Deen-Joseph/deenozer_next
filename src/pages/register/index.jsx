import  { useState, useEffect } from "react";
import "./LoginReg.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

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
        if (error.response.status === 400) {
          toast.error("User Already Exist!", toastConfig);
        } else toast.error(error.response.data.message, toastConfig);
      });
  };

  return (
    <>
      <div>
        <ToastContainer />
      </div>
      <div className="reg-app">
        <div className="auth-form-container">
          <h1>Register</h1>
          <form className="register-form" onSubmit={submitHandler}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              id="name"
              name="name"
              onChange={nameHandler}
              value={enteredName}
            />

            <label htmlFor="username">User Name</label>
            <input
              type="text"
              placeholder="User name"
              id="username"
              name="username"
              onChange={UserNameHandler}
              value={enteredUserName}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              name="email"
              onChange={emailHandler}
              value={enteredEmail}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter 8 digit password"
              id="password"
              name="password"
              onChange={passwordHandler}
              value={enteredPassword}
            />
            <button className="reg-submit" type="submit">
              Register
            </button>
          </form>
          {/* <div>
            <button
              className="link-btn"
              onClick={() => props.onToggle("login")}
            >
              {" "}
              Already Have Account? Login Here.
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Register;
