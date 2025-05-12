import React, { useState } from "react";
import { doSignInWithEmailAndPassword, dosignInwithgoogle } from "../../firebase/auth";
import { useNavigate } from "react-router-dom";
import './Login.css';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await doSignInWithEmailAndPassword(formData.email, formData.password);
      navigate("/");
    } catch (err) {
      setError("Failed to login. Check your credentials.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await dosignInwithgoogle();
      navigate("/");
    } catch (err) {
      setError("Google login failed.");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleEmailLogin}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      <hr />
      <button className="google" onClick={handleGoogleLogin}>
        Login with Google
      </button>
      <div className="new-user-section">
        <p>New user? <a onClick={() => navigate("/register")}>Register here</a></p>
      </div>
    </div>
  );
}
