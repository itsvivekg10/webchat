import { signInWithEmailAndPassword } from "firebase/auth";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase"; // Import firebase auth instance
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful!");
      window.location.href = "/home";
      // You can navigate the user to another page or do something else after successful login
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">WEB CHAT</span>
        <span className="title">Login</span>
        <form className="form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign in</button>
        </form>
        <p>
          Don't have an account? <Link index>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
