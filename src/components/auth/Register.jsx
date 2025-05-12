import React, { useState } from "react";
import { doCreateUserWithEmailAndPassword } from "../../firebase/auth";
import { useNavigate } from "react-router-dom";
import './Register.css';


export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await doCreateUserWithEmailAndPassword(formData.email, formData.password);
      navigate("/dashboard");
    } catch (err) {
      setError("Registration failed. Try a different email.");
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleRegister}>
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
