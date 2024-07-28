import { getUserById } from "@/api";

interface User {
  _id: string;
  // Add other properties as needed
}

interface ApiResponse {
  data: any; // Replace `any` with more specific types as needed
}

export const getCurrentUser = async (): Promise<ApiResponse | null> => {
  try {
    let userData = localStorage.getItem("user");
    let user: User | null = null;

    if (userData !== null) {
      user = JSON.parse(userData);
      if (user) {
        const currentUserResponse: ApiResponse = await getUserById(user._id);
        return currentUserResponse.data;
      } else {
        console.error("User object is null.");
        return null; // Indicate failure to retrieve user data
      }
    } else {
      // Handle the case where userData is null. You might want to throw an error or set a default value.
      console.error("User data not found in local storage.");
      return null; // Indicate failure to retrieve user data
    }
  } catch (error) {
    console.log(error);
    return null; // Handle error appropriately
  }
};
