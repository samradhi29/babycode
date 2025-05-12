// src/pages/StudentDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../components/api/mockApi";
import { useAuth } from "../context/authcontext";
import './StudentDetail.css';
export default function StudentDetail() {
  const { studentId } = useParams();
  const { currentUser } = useAuth();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/students/${studentId}`)
      .then((res) => setStudent(res.data))
      .catch((err) => console.error(err));
  }, [studentId]);

  if (!currentUser) {
    return <div>You must be logged in to view the details.</div>;
  }

  return (
    <div>
      {student ? (
        <div>
          <h2>{student.name}</h2>
          <p>Email: {student.email}</p>
          <p>Course: {student.course}</p>
          <p>School: {student.school}</p>
          <p>Branch: {student.branch}</p>
          <p>Hobbies: {student.hobbies}</p>
          <p>Description: {student.description}</p>
        </div>
      ) : (
        <div>Loading student details...</div>
      )}
    </div>
  );
}
