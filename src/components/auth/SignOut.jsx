

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { dosignOut } from "../../firebase/auth";

const SignOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        await dosignOut(); 
        navigate("/login"); // redirect to login
      } catch (error) {
        console.error("Error during sign out", error);
      }
    };

    logout();
  }, [navigate]);

  return <p>Signing you out...</p>;
};

export default SignOut;
