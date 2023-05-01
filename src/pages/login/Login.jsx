import { Button, TextField } from "@mui/material";
import google from "./google.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useNavigate } from "react-router-dom";
import AppleIcon from "@mui/icons-material/Apple";
import style from "./Login.module.css";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { isLogin } from "../recoilAtom/Atom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [islogin, setlogin] = useRecoilState(isLogin);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [errorEmail, setErrorEmail] = useState();
  const [errorPass, setErrorPass] = useState("");

  function handleLogin() {
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((user) => {
      return (
        user.name.toString() === name.toString() ||
        user.email.toString() === email.toString() ||
        user.phone.toString() === phone.toString()
      );
    });

    if (user) {
      let uname = user.name;
      let user1 = {
        username: uname,
      };
      if (user.password.toString() === password.toString()) {
        alert("Login successful");
        setlogin(true);
        localStorage.setItem("userData", JSON.stringify(user1));
        navigate("/home");
      } else {
        alert("Invalid password");
      }
    } else {
      alert("User not found");
    }

    setEmail("");
    setpassword("");
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

  return (
    <div className={style.container}>
      <div>
        <TwitterIcon
          sx={{ color: "skyblue", fontSize: "2rem", marginTop: ".5rem" }}
          className={style.logo}
        />
        <h1>Sign in to Twitter</h1>
      </div>

      <div>
        <Button
          sx={{
            borderRadius: "100px",
            backgroundColor: "white",
            width: "18rem",
            color: "black",
            top: "0px",
          }}
          variant="contained"
        >
          <img src={google} alt="google" /> Sign in with Gmail
        </Button>
        <br />
        <Button
          sx={{
            borderRadius: "100px",
            width: "18rem",
            backgroundColor: "white",
            color: "black",
            marginTop: "10px",
          }}
          variant="contained"
        >
          <AppleIcon />
          Sign in with Apple
        </Button>
      </div>
      <br />
      <div>
        <form>
          <TextField
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
              setpassword(e.target.value);
            }}
          />
          <br />
          {errorPass && <span className={style.error}>{errorPass}</span>}
          <br />
          <Button
            sx={{
              borderRadius: "100px",
              backgroundColor: "white",
              color: "black",
              width: "18rem",
              marginTop: "15px",
            }}
            variant="contained"
            onClick={handleLogin}
          >
            Login
          </Button>
          <br />
          <Button
            sx={{
              borderRadius: "100px",
              backgroundColor: "white",
              color: "black",
              width: "18rem",
              marginTop: "15px",
            }}
            variant="contained"
          >
            Forgot Password
          </Button>

          <br />
        </form>
      </div>
      <p>
        Don t have an account? <br />
        <Button
          sx={{
            borderRadius: "100px",
            backgroundColor: "white",
            color: "black",
            width: "12rem",
            marginTop: "15px",
          }}
          variant="contained"
          onClick={() => navigate("/register")}
        >
          Sign Up
        </Button>
      </p>
    </div>
  );
}

export default Login;
