import "./App.css";
import HomePage from "./pages/HomePage";
import { Link } from "react-router-dom";

import PartnersProvider from "./providers/PartnersGlobalState";
function App() {
  return (
    <>
      <HomePage />
      <Link to="partner/add">
        <button className="addBtn">Add</button>
      </Link>
    </>
  );
}

export default App;
