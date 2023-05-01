import TwitterIcon from "@mui/icons-material/Twitter";
import { Button, TextField } from "@mui/material";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Register.module.css";

export default function Register() {
  let initialValues;
  if (localStorage.getItem("user")) {
    initialValues = JSON.parse(localStorage.getItem("user"));
  } else {
    initialValues = [];
  }
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [] = useState(initialValues);
  const navigate = useNavigate();

  const [errorEmail, setErrorEmail] = useState("");
  const [errorUser, setErrorUser] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [errorPhone, setErrorPhone] = useState("");

  function handleRegister() {
    const isEmailValid = validateEmail();
    const isUsernameValid = validateUsername();
    const isPhoneValid = validatePhone();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isUsernameValid && isPhoneValid && isPasswordValid) {
      const user = { email, name: username, phone, password };
      const storedUsers = localStorage.getItem("users");
      const users = storedUsers ? JSON.parse(storedUsers) : [];
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Registration successful");
      navigate("/login");
    } else {
      // alert("Please fill in all required fields with valid values");
    }

    setEmail("");
    setUsername("");
    setPhone("");
    setPassword("");
    console.log(password);
  }

  function handleSubmit(e) {
    e.preventDefault();
  
  }

  const validateEmail = () => {
    const regex = /^\S+@\S+\.\S+$/;
    if (!email) {
      setErrorEmail("Email is required");
      return false;
    } else if (!regex.test(email)) {
      setErrorEmail("It should be a valid email address");
      return false;
    } else {
      setErrorEmail("");
      return true;
    }
  };

  const validatePassword = () => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

    if (!password) {
      setErrorPass("Password is required!");
      return false;
    } else if (!regex.test(password)) {
      setErrorPass(
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!"
      );
      return false;
    } else {
      setErrorPass("");
      return true;
    }
  };

  const validateUsername = () => {
    const regex = /^[a-zA-Z0-9]+$/;
    if (!username) {
      setErrorUser("Username is required!");
      return false;
    } else if (!regex.test(username)) {
      setErrorUser("Username should only contain letters and numbers!");
      return false;
    } else {
      setErrorUser("");
      return true;
    }
  };

  const validatePhone = () => {
    const regex = /^\d{10}$/;
    if (!phone) {
      setErrorPhone("Phone no. is required!");
      return false;
    } else if (!regex.test(phone)) {
      setErrorPhone("Please enter a valid 10 digit phone number!");
      return false;
    } else {
      setErrorPhone("");
      return true;
    }
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <TwitterIcon
          sx={{ color: "skyblue", fontSize: "2rem", marginTop: ".5rem" }}
        />
        <br />
        <h1>Join Twitter Today</h1>
        <div>
          <TextField
            type="text"
            id="filled-basic"
            label="email"
            variant="filled"
            sx={{
              color: "white",
              width: "18rem",
              borderRadius: "5px",
              border: "1px solid white",
              "& label": { color: "white" },
              "& input": { color: "white" },
            }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          {errorEmail && <span className={style.error}>{errorEmail}</span>}
          <br />
          <TextField
            type="text"
            id="filled-basic"
            label="username"
            variant="filled"
            sx={{
              color: "white",
              width: "18rem",
              borderRadius: "5px",
              border: "1px solid white",
              "& label": { color: "white" },
              "& input": { color: "white" },
            }}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <br />
          {errorUser && <span className={style.error}>{errorUser}</span>}
          <br />
          <TextField
            type="phone"
            id="filled-basic"
            label="phone"
            variant="filled"
            sx={{
              color: "blue",
              width: "18rem",
              borderRadius: "5px",
              border: "1px solid white",
              "& label": { color: "white" },
              "& input": { color: "white" },
            }}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <br />
          {errorPhone && <span className={style.error}>{errorPhone}</span>}
          <br />
          <TextField
            type="password"
            id="filled-basic"
            label="Password"
            variant="filled"
            sx={{
              color: "white",
              width: "18rem",
              borderRadius: "5px",
              border: "1px solid white",
              "& label": { color: "white" },
              "& input": { color: "white" },
            }}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          {errorPass && <span className={style.error}>{errorPass}</span>}
          <br />
        </div>

        <Button
          type="submit"
          variant="contained"
          onClick={handleRegister}
          sx={{
            borderRadius: "100px",
            backgroundColor: "white",
            color: "black",
            width: "15rem",
            marginTop: "10px",
          }}
        >
          Register
        </Button>
      </form>
      <p>
        Already have an account? <br />
        <Button
          sx={{
            borderRadius: "100px",
            backgroundColor: "white",
            color: "black",
            width: "12rem",
            marginTop: "15px",
          }}
          variant="contained"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </p>
    </div>
  );
}
