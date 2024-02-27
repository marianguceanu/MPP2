import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { partners } from "./mock/Data";
import Partner from "./pages/Partner";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {partners.map((partner) => (
            <Route
              path={"/partner/" + partner.id.toString()}
              element={
                <Partner
                  name={partner.name}
                  address={partner.address}
                  phone={partner.phone}
                  email={partner.email}
                  ownerPhoneNo={partner.ownerPhoneNo}
                  id={partner.id}
                />
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
