import "./App.css";
import { ValidationForm } from "./components/ValidationForm";

export const App = () => {
  return (
    <div className="app">
      <h1>Sign up for email updates</h1>
      <ValidationForm />
    </div>
  );
};
