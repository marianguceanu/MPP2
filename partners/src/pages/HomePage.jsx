import { Link } from "react-router-dom";
import { useEffect } from "react";
import { PartnersContext } from "../providers/PartnersGlobalState";
import { useContext } from "react";

const HomePage = () => {
  const { partners, getAllFromServer, setPartners } =
    useContext(PartnersContext);
  useEffect(() => {
    getAllFromServer().then((data) => {
      console.log(data);
      setPartners(data);
    });
  }, []);
  return (
    <div>
      {partners.map((partner) => (
        <div key={partner.id}>
          <h1>{partner.businessName}</h1>
          <p>{partner.address}</p>
          <Link to={`partner/${partner.id}`}>
            <button>View</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
