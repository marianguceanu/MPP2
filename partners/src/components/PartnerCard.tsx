import { Link } from "react-router-dom";

export default function PartnerCard({
  id,
  name,
}: {
  id: number;
  name: string;
}) {
  return (
    <div>
      <Link to={"/partner/" + id.toString()}>
        <button>{name}</button>
      </Link>
    </div>
  );
}
