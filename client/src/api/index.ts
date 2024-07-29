import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  withCredentials: true,
});

const getToken = async () => {
  return localStorage.getItem("token");
};

API.interceptors.request.use(
  async (config) => {
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

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

export const createOrder = (
  balance: string,
  type: string,
  userId: string,
  price: any
) => {
  return API.post("/orders", {
    balance: balance,
    type: type,
    userId: userId,
    price: price,
  });
};

export const getUserOrders = (userId: string) => API.get(`/orders/${userId}`);
