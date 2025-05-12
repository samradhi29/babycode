// src/pages/StudentList.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authcontext";
import axios from "../components/api/mockApi";
import "./studentCard.css";

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/students").then((res) => {
      setStudents(res.data);
    });
  }, []);

  const filteredStudents = filter
    ? students.filter((s) => s.course.toLowerCase() === filter.toLowerCase())
    : students;

  const searchedStudents = search
    ? filteredStudents.filter((s) =>
        s.name.toLowerCase().includes(search.toLowerCase())
      )
    : filteredStudents;

  const handleCardClick = (student) => {
    if (!currentUser) {
      localStorage.setItem("redirectToStudentId", student.id);
      navigate("/login");
    } else {
      navigate(`/student/${student.id}`);
    }
  };

  return (
    <div className="student-list-container">
      <h2 className="title">Students</h2>

      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <select
        onChange={(e) => setFilter(e.target.value)}
        className="course-filter"
      >
        <option value="">All Courses</option>
        <option value="React">React</option>
        <option value="Node.js">Node.js</option>
      </select>

      <div className="card-container">
        {searchedStudents.map((student) => (
          <div
            key={student.id}
            onClick={() => handleCardClick(student)}
            className="card"
          >
            <h3>{student.name}</h3>
            <p>{student.email}</p>
            <p>{student.course}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
