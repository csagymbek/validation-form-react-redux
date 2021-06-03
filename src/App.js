import React from "react";
import "./App.css";
import { ValidationForm } from "./components/ValidationForm";
import { useSelector } from "react-redux";
// import { BrowserRouter as Router } from "react-router-dom";
import { SubmitWindow } from "./components/SubmitWindow";

export const App = () => {
  const isSubmitted = useSelector((state) => state.isSubmitted);

  return (
    <div className="app">
      {isSubmitted ? (
        // The React Router also could be used here to push the user to different page
        <SubmitWindow />
      ) : (
        <>
          <h1>Sign up for email updates</h1>
          <ValidationForm />
        </>
      )}
    </div>
  );
};
