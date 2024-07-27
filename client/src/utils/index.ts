import { getUserById } from "@/api";

export const getCurrentUser = async () => {
  try {
    const user: object = JSON.parse(localStorage.getItem("user"));
    const currentUser: object = await getUserById(user?._id);
    return currentUser.data;
  } catch (error) {
    console.log(error);
  }
};
