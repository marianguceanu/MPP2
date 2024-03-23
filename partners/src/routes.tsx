import { Route } from "react-router-dom";
import { PartnerProps } from "./interfaces/PartnerProps";
import Partner from "./pages/Partner";
import AddOrUpdatePartner from "./pages/AddOrUpdatePartner";

export const routes = (partnerData: PartnerProps[]) => {
  return partnerData.map((partner) => (
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
          contacts={partner.contacts}
        />
      }
    />
  ));
};

export const updateRoutes = (
  partnerData: PartnerProps[],
  setPartnerData: Function,
  onUpdate: Function
) => {
  return partnerData.map((partner) => (
    <Route
      path={"/partner/" + partner.id.toString() + "/update"}
      element={
        <AddOrUpdatePartner
          id={partner.id}
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
              onUpdate(id, name, address, phone, email, ownerPhoneNo, contacts)
            );
          }}
        />
      }
    />
  ));
};
