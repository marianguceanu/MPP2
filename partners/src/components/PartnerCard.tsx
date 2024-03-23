import { Link } from "react-router-dom";

const PartnerCard = ({
  id,
  name,
  onDelete,
  onView,
}: {
  id: number;
  name: string;
  onDelete: Function;
  onView: Function;
}) => {
  return (
    <div>
      <Link to={"/partner/" + id.toString()}>
        <button onClick={onView()}>{name}</button>
      </Link>
      <Link to={"/partner/" + id.toString() + "/update"}>
        <button>Update</button>
      </Link>
      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default PartnerCard;
