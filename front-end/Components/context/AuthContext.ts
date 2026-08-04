import { AuthObject, User } from "@/types";
import { createContext } from "react";

export type AuthContextType = {
    user: AuthObject | null;
    login: (userData: AuthObject) => void;
    logout: () => void;
    updateUser: (updates: Partial<AuthObject>) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);