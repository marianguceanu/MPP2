import { createContext } from "react";
import { useState } from "react";
import {
  getAllFromServer,
  getByIdFromServer,
  addPartnerToServer,
  updatePartnerToServer,
  deletePartnerFromServer,
} from "../service/server";

export const PartnersContext = createContext({
  partners: [],
  partner: {},
  setPartner: () => {},
  setPartners: () => {},
  getAllFromServer: () => {},
  getByIdFromServer: () => {},
  addPartnerToServer: () => {},
  updatePartnerToServer: () => {},
  deletePartnerFromServer: () => {},
});

const PartnersGlobalState = ({ children }) => {
  const [partners, setPartners] = useState([]);
  const [partner, setPartner] = useState({});
  const value = {
    partners,
    partner,
    setPartner,
    setPartners,
    getAllFromServer,
    getByIdFromServer,
    addPartnerToServer,
    updatePartnerToServer,
    deletePartnerFromServer,
  };
  return (
    <PartnersContext.Provider value={{ getByIdFromServer, ...value }}>
      {children}
    </PartnersContext.Provider>
  );
};

export default PartnersGlobalState;
