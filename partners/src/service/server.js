import axios from "axios";
import { partnersUrl } from "../constants/api";

export const getAllFromServer = async () => {
  let partners = [];
  const response = await axios.get(`${partnersUrl}/all`);
  response.data.forEach((partner) => {
    partners.push({
      id: partner.partnerId,
      businessName: partner.businessName,
      contactPerson: partner.contactPerson,
      email: partner.email,
      phoneNumber: partner.phoneNumber,
      address: partner.address,
    });
  });
  return partners;
};

export const getByIdFromServer = async (id) => {
  let partner = await axios.get(`${partnersUrl}/${id}`);
  console.log(partner.data);
  return {
    businessName: partner.data.businessName,
    address: partner.data.address,
    phoneNumber: partner.data.phoneNumber,
    contactPerson: partner.data.contactPerson,
    email: partner.data.email,
  };
};

export const addPartnerToServer = async (partner) => {
  const part = await axios.post(`${partnersUrl}`, partner);
  return part.data;
};

export const updatePartnerToServer = async (id, partner) => {
  const requestString = `${partnersUrl}/${id}`;
  const response = await axios.put(requestString, partner);
  return response.data;
};

export const deletePartnerFromServer = async (id) => {
  const response = await axios.delete(`${partnersUrl}/${id}`);
  return response.data;
};
