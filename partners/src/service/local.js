export const getById = (id, data) => {
  const partner = data.find((item) => item.id == id);
  return partner;
};

export const addPartner = (partner, data) => {
  partner.id = data.length + 1;
  data.push(partner);
};

export const updatePartner = (partner, data) => {
  const index = data.findIndex((item) => item.id == partner.id);
  data[index] = partner;
};

export const deletePartner = (id, data) => {
  const index = data.findIndex((item) => item.id == id);
  data.splice(index, 1);
};
