import PartnerCard from "../components/PartnerCard";
import { partners } from "../mock/Data";

export default function Home() {
  const partnerCards = partners.map((partner) => (
    <PartnerCard key={partner.id} id={partner.id} name={partner.name} />
  ));
  return (
    <div>
      <h1>Partners App</h1>
      {partnerCards}
    </div>
  );
}
