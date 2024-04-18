export const getFromInputs = () => {
  const partner = {
    businessName: window.document.querySelector(
      'input[placeholder="Business Name"]',
    ).value,
    address: window.document.querySelector('input[placeholder="Address"]')
      .value,
    email: window.document.querySelector('input[placeholder="Email"]').value,
    phoneNumber: window.document.querySelector(
      'input[placeholder="Phone Number"]',
    ).value,
    contactPerson: window.document.querySelector(
      'input[placeholder="Contact Person"]',
    ).value,
    reach: window.document.querySelector('input[placeholder="Reach"]').value,
  };
  return partner;
};
