"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    
    const safety = setTimeout(() => {
      if (mounted) setLoading(false);
    }, 7000);

    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        if (!mounted) return;
        setUser(currentUser);
        setLoading(false);
        clearTimeout(safety);
      },
      (err) => {
        console.error("onAuthStateChanged error:", err);
        if (mounted) {
          setUser(null);
          setLoading(false);
          clearTimeout(safety);
        }
      }
    );

    return () => {
      mounted = false;
      clearTimeout(safety);
      if (typeof unsubscribe === "function") unsubscribe();
    };
  }, []);

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, loading, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
