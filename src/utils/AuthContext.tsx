import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  username: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  register: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USERS_KEY = "blog_users";
const SESSION_KEY = "blog_session";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const session = localStorage.getItem(SESSION_KEY);
    if (session) setUser(JSON.parse(session));
  }, []);

  const login = (username: string, password: string) => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
    const found = users.find((u: any) => u.username === username && u.password === password);
    if (found) {
      setUser({ username });
      localStorage.setItem(SESSION_KEY, JSON.stringify({ username }));
      return true;
    }
    return false;
  };

  const register = (username: string, password: string) => {
    let users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
    if (users.find((u: any) => u.username === username)) return false;
    users.push({ username, password });
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    setUser({ username });
    localStorage.setItem(SESSION_KEY, JSON.stringify({ username }));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(SESSION_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}; 