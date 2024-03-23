import { Link } from "react-router-dom";
import "./styles/UpdatePartner.css";

const AddOrUpdatePartner = ({
  id,
  onUpdate,
}: {
  id: number;
  onUpdate: Function;
}) => {
  return (
    <>
      <div>Add or update a partner</div>
      <form className="UpdateForm">
        <label htmlFor="NameTextFieldUpdate">Business name</label>
        <input id="NameTextFieldUpdate" type="text" />
        <label htmlFor="AddressTextFieldUpdate">Address</label>
        <input id="AddressTextFieldUpdate" type="text" />
        <label htmlFor="PhoneTextFieldUpdate">Phone</label>
        <input id="PhoneTextFieldUpdate" type="text" />
        <label htmlFor="EmailTextFieldUpdate">Email</label>
        <input id="EmailTextFieldUpdate" type="text" />
        <label htmlFor="OwnerPhoneNoTextFieldUpdate">Owner phone number</label>
        <input id="OwnerPhoneNoTextFieldUpdate" type="text" />
        <label htmlFor="ContactsTextFieldUpdate">Contacts</label>
        <input id="ContactsTextFieldUpdate" type="text" />
      </form>
      <Link to={"/"}>
        <button>Back</button>
      </Link>
      <button
        onClick={() => {
          let name = (
            document.getElementById("NameTextFieldUpdate") as HTMLInputElement
          ).value;
          let address = (
            document.getElementById(
              "AddressTextFieldUpdate"
            ) as HTMLInputElement
          ).value;
          let phone = (
            document.getElementById("PhoneTextFieldUpdate") as HTMLInputElement
          ).value;
          let email = (
            document.getElementById("EmailTextFieldUpdate") as HTMLInputElement
          ).value;
          let ownerPhoneNo = (
            document.getElementById(
              "OwnerPhoneNoTextFieldUpdate"
            ) as HTMLInputElement
          ).value;
          let contacts = (
            document.getElementById("ContactsTextFieldUpdate") as HTMLElement
          ).ariaValueMax;
          onUpdate(id, name, address, phone, email, ownerPhoneNo, contacts);
          alert("Partners list updated");
        }}
      >
        Submit
      </button>
    </>
  );
};

export default AddOrUpdatePartner;
