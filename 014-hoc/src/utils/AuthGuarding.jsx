import React from "react";
import { Navigate } from "react-router-dom";

// HOC

function AuthGuarding({ children }) {
  function checkIsLogged() {
    if (localStorage.hasOwnProperty("vite_user")) {
      return localStorage.getItem("vite_user");
    }
  }

  return checkIsLogged() ? children : <Navigate to="/login" />;
}

export default AuthGuarding;
