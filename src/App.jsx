import { Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Addstudent from "./components/Addstudent";
import Studentlist from "./components/Studentlist";
import Navbar from './components/Navbar';
import SignOut from "./components/auth/Signout";
import ProtectedRoute from "./components/ProtectedRoute";
import './App.css';
import StudentDetail from "./components/StudentDetail";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/liststudent" element={<Studentlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
           <Route path="/student/:studentId" element={<StudentDetail />} />
            <Route path="/signout" element={<SignOut />} />
        <Route
          path="/addstudent"
          element={
            <ProtectedRoute>
              <Addstudent />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
