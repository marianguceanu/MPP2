import "./App.css";
import HomePage from "./pages/HomePage";
import { Link } from "react-router-dom";

import PartnersProvider from "./providers/PartnersGlobalState";
function App() {
  return (
    <PartnersProvider>
      <HomePage />
      <Link to="partner/add">
        <button className="addBtn">Add</button>
      </Link>
    </PartnersProvider>
  );
}

export default App;
