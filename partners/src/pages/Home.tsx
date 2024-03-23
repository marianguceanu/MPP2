import { Link } from "react-router-dom";
import PartnerCard from "../components/PartnerCard";
import { PartnerProps } from "../interfaces/PartnerProps";

const Home = ({
  partnersData,
  onDelete,
  onSort,
  onView,
}: {
  partnersData: PartnerProps[];
  onDelete: Function;
  onSort: Function;
  onView: Function;
}) => {
  const partnerCards = partnersData.map((partner) => (
    <PartnerCard
      //   key={partnersData.indexOf(partner)}
      id={partner.id}
      name={partner.name}
      onDelete={onDelete}
      onView={onView}
    />
  ));
  return (
    <div>
      <h1>Partners App</h1>
      {partnerCards}
      <Link to={"/add"}>
        <button>Add Partner</button>
      </Link>
      <Link to={"/"}>
        <button
          onClick={() => {
            onSort();
          }}
        >
          Sort the list
        </button>
      </Link>
    </div>
  );
};

export default Home;
