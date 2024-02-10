import { useState } from "react";
import style from "./SignIn.module.css";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };
    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log(data);
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
        <p className={style.para}>Enter your credentials to access your account</p>
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
        </form>
      </div>
    </>
  );
};

export default SignIn;
