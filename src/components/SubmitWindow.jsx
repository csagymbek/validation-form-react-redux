import React from "react";
import { useSelector } from "react-redux";
import "../styles/SubmitWindow.sass";

export const SubmitWindow = () => {
  const { firstName } = useSelector((state) => state.user);

  return (
    <div className="submitWindow">
      <h1>
        Thank you <span style={{ color: "salmon" }}>{firstName}</span>! Your
        information has been submitted successfully.
      </h1>
    </div>
  );
};
