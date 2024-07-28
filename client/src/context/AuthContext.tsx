import { getCurrentUser } from "@/utils";
import { createContext, useContext, useEffect, useState } from "react";

interface ApiResponse {
  data: any;
  wallet: any;
  username: any;
  user: any;
}

const AuthContext = createContext<{
  currentUser: ApiResponse | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<ApiResponse | null>>;
}>({
  currentUser: null,
  setCurrentUser: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<ApiResponse | null>(null);
  console.log(currentUser);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const user: ApiResponse | null =
          (await getCurrentUser()) as ApiResponse | null;
        setCurrentUser(user); // Now correctly accounts for ApiResponse or null        setCurrentUser(user);
      } catch (error) {
        console.error("Failed to fetch current user:", error);
      }
    };

    fetchCurrentUser();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
