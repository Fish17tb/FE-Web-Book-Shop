import axios from "../axios.customize";

export const registerAPI = (
  fullName: string,
  email: string,
  phone: string,
  password: string
) => {
  const urlBackend = `/api/v1/auth/register`;
  return axios.post(urlBackend, {fullName, email, phone, password})
};
