import { Link } from "react-router-dom";
import { getFromInputs } from "../utils/getFromInput";
import { useContext } from "react";
import { PartnersContext } from "../providers/PartnersGlobalState";

const AddPartner = () => {
  const { addPartnerToServer } = useContext(PartnersContext);

  return (
    <>
      <input type="text" placeholder="Business Name" />
      <input type="text" placeholder="Address" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Phone Number" />
      <input type="text" placeholder="Contact Person" />
      <input type="number" placeholder="Reach" />

      <Link to="/">
        <button
          onClick={() => {
            const inputs = getFromInputs();
            const partner = {
              businessName: inputs.businessName,
              address: inputs.address,
              email: inputs.email,
              phoneNumber: inputs.phoneNumber,
              contactPerson: inputs.contactPerson,
            };
            const added = addPartnerToServer(partner);
            console.log(added);
          }}
        >
          Save
        </button>
      </Link>
    </>
  );
};

export default AddPartner;
