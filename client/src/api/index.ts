import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:8080/api/v1",
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

export const deposit = (amount: number) => {
  return API.post("/users/deposit", { amount });
};

export const getUserById = (id: string) => API.get(`/users/${id}`);
