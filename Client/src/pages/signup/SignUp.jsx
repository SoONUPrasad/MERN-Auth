import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./SignUp.module.css";
import axios from "axios";
const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { name, email, password };
    try {
      const response = await axios.post(
        "http://localhost:4000/api/signup",
        user,
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      setTimeout(() => {
        navigate("/signin");
      })
    } catch (error) {
      console.log(error);
    }
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className={style.container}>
        <h6 className={style.hading}>Register</h6>
        <form className={style.container}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email">Email</label>
          <input
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
            <p className={style.para}>
              Already have an account? <Link to="/signin">Sign In</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
