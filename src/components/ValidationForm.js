import { useSelector } from "react-redux";

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
        <input type="text" value={firstName} />
        <input type="text" value={lastName} />
        <input type="text" value={email} />
        <input type="text" value={organization} />
      </div>
      <div className="validationForm__selectField">
        <label htmlFor="">- SELECT ONE -</label>
        <select name="" id="" value="">
          <option value=""></option>
        </select>
      </div>
      <div className="validationForm__checkboxField">
        <input type="checkbox" />
        ADVANCES
        <input type="checkbox" />
        OTHER COMMUNICATIONS
        <input type="checkbox" />
        ALERTS
      </div>
    </div>
  );
};
