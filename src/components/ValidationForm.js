import { useSelector } from "react-redux";
import "./ValidationForm.css";

export const ValidationForm = () => {
  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.lastName);
  const email = useSelector((state) => state.email);
  const organization = useSelector((state) => state.organization);
  const residence = useSelector((state) => state.residence);
  console.log(residence);

  return (
    <div className="validationForm">
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
          <option value=""></option>
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
    </div>
  );
};
