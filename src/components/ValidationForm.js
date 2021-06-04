import React from "react";
import "../styles/ValidationForm.sass";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { submitUser } from "../redux/formReducer";

const states = ["CA", "WA", "TX", "NY", "AL"];

export const ValidationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    state: "",
    organization: "",
    advances: false,
    alerts: false,
    other: false,
  });
  const dispatch = useDispatch();

  const setData = (key, value) => {
    setFormData((prevState) => ({ ...prevState, [key]: value }));
  };

  const onReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      state: "",
      organization: "",
      advances: false,
      alerts: false,
      other: false,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (advances || alerts || other) {
      dispatch(submitUser(formData));
      // pushing formData to redux-thunk
      // dispatch(postUser(formData))
    } else {
      alert("At least one of the checkbox options is required!");
    }
  };

  console.log(formData);
  const {
    firstName,
    lastName,
    email,
    state,
    organization,
    advances,
    alerts,
    other,
  } = formData;

  return (
    <>
      <h1>Sign up for email updates</h1>
      <form className="validationForm" onSubmit={onSubmit}>
        <div className="validationForm__inputFields">
          <input
            type="text"
            value={firstName}
            required
            placeholder="Name"
            onChange={(e) => setData("firstName", e.target.value)}
          />
          <input
            type="text"
            value={lastName}
            required
            placeholder="Last Name"
            onChange={(e) => setData("lastName", e.target.value)}
          />
          <input
            type="email"
            value={email}
            required
            placeholder="Email"
            onChange={(e) => setData("email", e.target.value)}
          />
          <input
            type="text"
            value={organization}
            required
            placeholder="Organization"
            onChange={(e) => setData("organization", e.target.value)}
          />
        </div>
        <div className="validationForm__selectField">
          <label htmlFor="">STATE OF RESIDENCY</label>
          <select
            name=""
            id=""
            value={state}
            onChange={(e) => setData("state", e.target.value)}
          >
            {states.map((st) => (
              <option value={st} key={st}>
                {st}
              </option>
            ))}
          </select>
        </div>
        <div className="validationForm__checkboxField">
          <div>
            <input
              checked={advances}
              onChange={(e) => setData("advances", e.target.checked)}
              type="checkbox"
            />
            <label htmlFor="">ADVANCES</label>
          </div>
          <div>
            <input
              checked={other}
              onChange={(e) => setData("other", e.target.checked)}
              type="checkbox"
            />
            <label htmlFor="">OTHER COMMUNICATIONS</label>
          </div>
          <div>
            <input
              checked={alerts}
              onChange={(e) => setData("alerts", e.target.checked)}
              type="checkbox"
            />
            <label htmlFor="">ALERTS</label>
          </div>
        </div>
        <div className="validationForm__submitSection">
          <button type="submit" className="validationForm__submitButton">
            SUBMIT
          </button>
          <button onClick={onReset} className="validationForm__resetButton">
            RESET
          </button>
        </div>
      </form>
    </>
  );
};
