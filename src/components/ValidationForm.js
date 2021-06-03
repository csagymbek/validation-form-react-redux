import "./ValidationForm.css";
import { useSelector } from "react-redux";
import { useState } from "react";

export const ValidationForm = () => {
  const residence = useSelector((state) => state.residence);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");

  return (
    <form className="validationForm">
      <div className="validationForm__inputFields">
        <input type="text" value={firstName} required placeholder="Name" />
        <input type="text" value={lastName} required placeholder="Last Name" />
        <input type="text" value={email} required placeholder="Email" />
        <input
          type="text"
          value={organization}
          required
          placeholder="Organization"
        />
      </div>
      <div className="validationForm__selectField">
        <label htmlFor="">- SELECT ONE -</label>
        <select name="" id="" value="">
          {residence.map((st) => (
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
