import axios from "axios";

export const API = axios.create({
  baseURL: "https://darklogvault.onrender.com/api/v1",
  withCredentials: true,
});

export const registerUser = (
  username: string,
  email: string,
  password: string
) => {
  return API.post("/auth/register", { username, email, password });
};

export const loginUser = (email: string, password: string) => {
  return API.post("/auth/login", { email, password });
};
