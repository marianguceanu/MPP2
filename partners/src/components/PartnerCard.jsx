import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { PartnersContext } from "../providers/PartnersGlobalState";

const PartnerCard = () => {
  const { id } = useParams();
  const {
    partner,
    partners,
    setPartner,
    setPartners,
    getByIdFromServer,
    deletePartnerFromServer,
  } = useContext(PartnersContext);
  useEffect(() => {
    getByIdFromServer(id).then((data) => {
      setPartner(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            const newPartners = partners.map((partner) => {
              if (partner.id === id) {
                return null;
              }
              return partner;
            });
            setPartners(newPartners);
          }}
        >
          Delete
        </button>
      </Link>
    </>
  );
};

export default PartnerCard;
