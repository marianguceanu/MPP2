import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { PartnersContext } from "../providers/PartnersGlobalState";

const PartnerCard = () => {
  const { id } = useParams();
  const { getByIdFromServer, deletePartnerFromServer, partner, setPartner } =
    useContext(PartnersContext);
  useEffect(() => {
    setPartner(getByIdFromServer(id));
  }, []);

  return (
    <>
      <h2>{"Business Name: " + partner.businessName}</h2>
      <p>{"Address: " + partner.address}</p>
      <p>{"Email: " + partner.email}</p>
      <p>{"Phone Number: " + partner.phoneNumber}</p>
      <p>{"Contact Person: " + partner.contactPerson}</p>
      <p>{"Reach: " + partner.reach}</p>
      <Link to={`/partner/update/${id}`}>
        <button>Edit</button>
      </Link>
      <Link to={`/`}>
        <button
          onClick={() => {
            deletePartnerFromServer(id);
          }}
        >
          Delete
        </button>
      </Link>
    </>
  );
};

export default PartnerCard;
