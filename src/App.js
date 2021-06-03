import React from "react";
import "./App.css";
import { ValidationForm } from "./components/ValidationForm";
import { useSelector } from "react-redux";
// import { BrowserRouter as Router } from "react-router-dom";

export const App = () => {
  const isSubmitted = useSelector((state) => state.isSubmitted);

  return (
    <div className="app">
      <h1>Sign up for email updates</h1>
      <ValidationForm />
    </div>
  );
};
