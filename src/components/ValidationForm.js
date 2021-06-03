import React from "react";
import "./ValidationForm.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { submitUser } from "../redux/formReducer";

export const ValidationForm = () => {
  const residence = useSelector((state) => state.residence);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const dispatch = useDispatch();

  return (
    <form
      className="validationForm"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          submitUser({
            firstName,
            lastName,
            email,
            organization,
            isSubmitted: true,
          })
        );
      }}
    >
      <div className="validationForm__inputFields">
        <input
          type="text"
          value={firstName}
          required
          placeholder="Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          value={lastName}
          required
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          required
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={organization}
          required
          placeholder="Organization"
          onChange={(e) => setOrganization(e.target.value)}
        />
      </div>
      <div className="validationForm__selectField">
        <label htmlFor="">- STATE RESIDENCE -</label>
        <select name="" id="">
          {residence?.map((st) => (
            <option value={st} key={st}>
              {st}
            </option>
          ))}
        </select>
      </div>
      <div className="validationForm__checkboxField">
        <input type="checkbox" />
        <label htmlFor="">ADVANCES</label>
        <input type="checkbox" />
        <label htmlFor="">OTHER COMMUNICATIONS</label>
        <input type="checkbox" />
        <label htmlFor="">ALERTS</label>
      </div>
      <div className="validationForm__submitSection">
        <button type="submit">SUBMIT</button>
        <button>RESET</button>
      </div>
    </form>
  );
};
