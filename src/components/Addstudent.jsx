import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authcontext";
import axios from "../components/api/mockApi";          // ⬅ add this import
import "./addstudent.css";

const Addstudent = () => {
  const { currentUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    school: "",
    branch: "",
    hobbies: "",
    description: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    if (!formData.name || !formData.email || !formData.course) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");

    try {
    
      await axios.post("/api/students", formData);

   
      setFormData({
        name: "",
        email: "",
        course: "",
        school: "",
        branch: "",
        hobbies: "",
        description: "",
      });

      
      navigate("/liststudent");
    } catch (err) {
      console.error("Failed to add student:", err);
      setError("Failed to add student. Try again.");
    }
  };

  const redirectToLogin = () => navigate("/login");

  return (
    <div className="add-student-container">
      <h2>Add Student Details</h2>
      {error && <p className="error">{error}</p>}

      {!currentUser ? (
        <div className="auth-prompt">
          <p>You must be logged in to add a student.</p>
          <button onClick={redirectToLogin}>Login</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="add-student-form">
          {/* inputs bind to formData */}
          {[
            { name: "name", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email", required: true },
            { name: "course", placeholder: "Course", required: true },
            { name: "school", placeholder: "School Name" },
            { name: "branch", placeholder: "Branch" },
            { name: "hobbies", placeholder: "Hobbies (comma-separated)" },
          ].map((f) => (
            <input
              key={f.name}
              name={f.name}
              type={f.type || "text"}
              value={formData[f.name]}
              onChange={handleInputChange}
              placeholder={f.placeholder}
              required={f.required || false}
            />
          ))}

          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Brief Description"
          />

          <button type="submit">Add Student</button>
        </form>
      )}
    </div>
  );
};

export default Addstudent;
