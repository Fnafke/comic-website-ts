import UserService from "@/services/UserService";
import { AuthObject } from "@/types";
import { useRouter } from "next/router";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<AuthObject | null>(null);

    const router = useRouter();

    const login = (userData: AuthObject) => {
        localStorage.setItem("loggedInUser", JSON.stringify(userData));
        setUser(userData);
    }


    const logout = () => {
        localStorage.removeItem("loggedInUser");
        setUser(null);
        router.push("/login");
    }

    const updateUser = useCallback((updates: Partial<AuthObject>) => {
        setUser(prev => {
            if (!prev) return prev;
            const updated = { ...prev, ...updates };
            localStorage.setItem("loggedInUser", JSON.stringify(updated));
            return updated;
        });
    }, [])

    useEffect(() => {
        const storedUser = localStorage.getItem("loggedInUser");

        if (!storedUser) {
            return;
        }

        const parsedUser = JSON.parse(storedUser) as AuthObject;
        setUser(parsedUser);

        void UserService.getProfile().then((response: Response | undefined) => {
            if (!response || !response.ok) {
                console.error("Invalid session: ...Logging out.");
                logout();
            }
        });
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
}