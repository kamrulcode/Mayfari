import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("mayfair-user");

    return savedUser ? JSON.parse(savedUser) : null;
  });

  const signup = (userData) => {
    const existingUser = localStorage.getItem("mayfair-user");

    if (existingUser) {
      const parsedUser = JSON.parse(existingUser);

      if (parsedUser.email === userData.email) {
        return {
          success: false,
          message: "An account with this email already exists.",
        };
      }
    }

    const newUser = {
      id: Date.now(),
      name: userData.name,
      email: userData.email,
      password: userData.password,
    };

    localStorage.setItem("mayfair-user", JSON.stringify(newUser));
    console.log(newUser);

    setUser(newUser);

    return {
      success: true,
      user: newUser,
    };
  };

  const login = (email, password) => {
    const savedUser = localStorage.getItem("mayfair-user");

    if (!savedUser) {
      return {
        success: false,
        message: "No account found. Please create an account first.",
      };
    }

    const existingUser = JSON.parse(savedUser);

    if (existingUser.email !== email || existingUser.password !== password) {
      return {
        success: false,
        message: "Incorrect email or password.",
      };
    }

    setUser(existingUser);

    return {
      success: true,
      user: existingUser,
    };
  };

  const logout = () => {
    localStorage.removeItem("mayfair-user");

    setUser(null);
  };

  const value = {
    user,
    signup,
    login,
    logout,
    isAuthenticated: Boolean(user),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthProvider;
