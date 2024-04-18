import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getFromInputs } from "../utils/getFromInput";
import { useContext } from "react";
import { PartnersContext } from "../providers/PartnersGlobalState";

const UpdatePartner = () => {
  const { id } = useParams();
  const [partner] = useState({});
  const { partners, setPartners, updatePartnerToServer } =
    useContext(PartnersContext);

  return (
    <>
      <input
        type="text"
        placeholder="Business Name"
        defaultValue={partner.businessName}
        onChange={(e) => {
          partner.businessName = e.target.value;
        }}
      />
      <input
        type="text"
        placeholder="Address"
        defaultValue={partner.address}
        onChange={(e) => {
          partner.address = e.target.value;
        }}
      />
      <input
        type="text"
        placeholder="Email"
        defaultValue={partner.email}
        onChange={(e) => {
          partner.email = e.target.value;
        }}
      />
      <input
        type="text"
        placeholder="Phone Number"
        defaultValue={partner.phoneNumber}
        onChange={(e) => {
          partner.phoneNumber = e.target.value;
        }}
      />
      <input
        type="text"
        placeholder="Contact Person"
        defaultValue={partner.contactPerson}
        onChange={(e) => {
          partner.contactPerson = e.target.value;
        }}
      />
      <input
        type="number"
        placeholder="Reach"
        onChange={(e) => {
          partner.reach = e.target.value;
        }}
      />

      <Link to="/">
        <button
          onClick={() => {
            const inputs = getFromInputs();
            const toUpdate = {
              businessName: inputs.businessName || "empty",
              address: inputs.address || "empty",
              email: inputs.email || "empty",
              phoneNumber: inputs.phoneNumber || "empty",
              contactPerson: inputs.contactPerson || "empty",
            };
            const updated = updatePartnerToServer(id, toUpdate);
            console.log(updated);
            const newPartners = partners.map((partner) => {
              if (partner.id === id) {
                return updated;
              }
              return partner;
            });
            setPartners(newPartners);
          }}
        >
          Save
        </button>
      </Link>
    </>
  );
};

export default UpdatePartner;
