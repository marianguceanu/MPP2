import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { partners } from "./mock/Data";
import { PartnerProps } from "./interfaces/PartnerProps";
import React from "react";
import AddOrUpdatePartner from "./pages/AddOrUpdatePartner";
import { routes, updateRoutes } from "./routes";

const App = () => {
  const [partnerData, setPartnerData] =
    React.useState<PartnerProps[]>(partners);
  const onAdd = (
    id: number,
    name: string,
    address: string,
    phone: string,
    email: string,
    ownerPhoneNo: string,
    contacts: number
  ) => {
    const newPartnerData = partnerData;
    if (contacts == null) contacts = 0;
    newPartnerData.push({
      id: id + newPartnerData.length + 1,
      name: name,
      address: address,
      phone: phone,
      email: email,
      ownerPhoneNo: ownerPhoneNo,
      contacts: contacts,
    });
    console.log(newPartnerData);
    return newPartnerData;
  };

  const onDelete = (id: number) => {
    const newPartnerData = partnerData.filter((partner) => partner.id !== id);
    console.log(newPartnerData);
    return newPartnerData;
  };

  const onSort = () => {
    const newPartnerData: PartnerProps[] = partnerData.sort(
      (p1, p2) => p1.contacts - p2.contacts
    );
    console.log(partnerData);
    return newPartnerData;
  };

  const onUpdate = (
    id: number,
    name: string,
    address: string,
    phone: string,
    email: string,
    ownerPhoneNo: string,
    contacts: number
  ) => {
    const newPartnerData = partnerData.map((partner) => {
      if (partner.id === id) {
        partner.name = name;
        partner.address = address;
        partner.phone = phone;
        partner.email = email;
        partner.ownerPhoneNo = ownerPhoneNo;
        partner.contacts = contacts;
      }
      return partner;
    });
    console.log(partnerData);
    return newPartnerData;
  };
  return (
    <BrowserRouter>
      <Routes>
        /* Home*/
        <Route
          path="/"
          element={
            <Home
              partnersData={partnerData}
              onDelete={(id: number) => {
                setPartnerData(onDelete(id));
                // console.log(partnerData);
              }}
              onSort={onSort}
              onView={() => {}}
            />
          }
        />
        /* Partners details */
        {routes(partnerData)}
        /* Update partner*/
        {updateRoutes(partnerData, setPartnerData, onUpdate)}
        /* Add partner*/
        <Route
          path="/add"
          element={
            <AddOrUpdatePartner
              id={partnerData.length + 1}
              onUpdate={(
                id: number,
                name: string,
                address: string,
                phone: string,
                email: string,
                ownerPhoneNo: string,
                contacts: number
              ) => {
                setPartnerData(
                  onAdd(id, name, address, phone, email, ownerPhoneNo, contacts)
                );
              }}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
