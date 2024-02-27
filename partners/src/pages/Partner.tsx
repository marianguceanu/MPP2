import { Link } from "react-router-dom";
import { PartnerProps } from "../interfaces/PartnerProps";

export default function Partner(props: PartnerProps) {
  return (
    <div>
      <Link to="/">
        <button>Back</button>
      </Link>
      <h2>{props.name}</h2>
      <p>{"ID: " + props.id}</p>
      <p>{"Address: " + props.address}</p>
      <p>{"Phone number: " + props.phone}</p>
      <p>{"Email: " + props.email}</p>
      <p>{"Owner phone number: " + props.ownerPhoneNo}</p>
    </div>
  );
}
