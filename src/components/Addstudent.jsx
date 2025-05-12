import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authcontext"; // Import context
import './addstudent.css'
const Addstudent = () => {
  const { currentUser } = useContext(AuthContext);  // Get the current user from context
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add student logic goes here
  };

  // Redirect to Login page
  const redirectToLogin = () => {
    navigate("/login");  // Navigate to login page if not logged in
  };

  return (
    <div className="add-student-container">
      <h2>Add Student Details</h2>
      {error && <p className="error">{error}</p>}
      
      {/* Check if the user is logged in */}
      {!currentUser ? (
        // If not logged in, show a prompt to login or register
        <div className="auth-prompt">
          <p>You must be logged in to add a student.</p>
          <button onClick={redirectToLogin}>Login</button>
        </div>
      ) : (
        // If logged in, show the add student form
        <form onSubmit={handleSubmit} className="add-student-form">
          <input name="name" placeholder="Full Name" />
          <input name="email" type="email" placeholder="Email" />
          <input name="course" placeholder="Course" />
          <input name="school" placeholder="School Name" />
          <input name="branch" placeholder="Branch" />
          <input name="hobbies" placeholder="Hobbies (comma-separated)" />
          <textarea name="description" placeholder="Brief Description" />
          <button type="submit">Add Student</button>
        </form>
      )}
    </div>
  );
};

export default Addstudent;
