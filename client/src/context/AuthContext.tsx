import { getCurrentUser } from "@/utils";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const user = await getCurrentUser();
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
