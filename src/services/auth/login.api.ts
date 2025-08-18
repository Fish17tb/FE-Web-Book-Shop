import axios from "../axios.customize";

export const loginAPI = (email: string, password: string) => {
  const urlBackend = `/api/v1/auth/login`;
  return axios.post<IBackendRes<ILogin>>(urlBackend, { email, password });
};
