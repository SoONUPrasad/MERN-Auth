import { useState } from 'react'
import style from './SignUp.module.css'
const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { name, email, password };
    try {
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      })
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    setName('');
    setEmail('');
    setPassword('');
  }
    return (
      <>
        <div className={style.container}>
          <h6>Register</h6>
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
            <button type="submit" onClick={handleSubmit}>Sign In</button>
          </form>
        </div>
      </>
    )
  }
  
  export default SignUp
  