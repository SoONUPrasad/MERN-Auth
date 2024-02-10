import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import style from "./SignIn.module.css";
const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };
    try {
      const response = await axios.post(
        "http://localhost:3000/api/signin",
        user,
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className={style.container}>
        <h6 className={style.hading}>Sign In</h6>
        <p className={style.para}>
          Enter your credentials to access your account
        </p>
        <form className={style.container} action="">
          <label htmlFor="email">Email</label>
          <input
            className={style.input}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            className={style.input}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" onClick={handleSubmit}>
            Sign In
          </button>
          <div>
            <span>
              {/*  eslint-disable-next-line react/no-unescaped-entities */}
              Don't have an account? <Link to={"/signup"}>Sign Up</Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
