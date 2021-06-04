import React from "react";
import "./styles/App.sass";
import { ValidationForm } from "./components/ValidationForm";
import { useSelector } from "react-redux";
import { SubmitWindow } from "./components/SubmitWindow";
// import { BrowserRouter as Router } from "react-router-dom";

export const App = () => {
  const isSubmitted = useSelector((state) => state.isSubmitted);

  return (
    <div className="app">
      {isSubmitted ? (
        // The React Router also could be used here to push the user to different page
        <SubmitWindow />
      ) : (
        <>
          <ValidationForm />
        </>
      )}
    </div>
  );
};
