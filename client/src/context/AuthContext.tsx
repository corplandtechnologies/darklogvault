import { getCurrentUser } from "@/utils";
import { createContext, useContext, useEffect, useState } from "react";

interface ApiResponse {
  data: any;
  wallet: any;
  username: any;
  user: any;
  _id: any;
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

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const user: ApiResponse | null =
          (await getCurrentUser()) as ApiResponse | null;
        setCurrentUser(user);
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
