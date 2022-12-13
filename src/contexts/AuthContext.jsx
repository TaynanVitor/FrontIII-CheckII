import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  
  const [userData, setUserData] = useState({});

  function fillUserDataState({ username, token, password }) {
    console.log(username, token, password);
    localStorage.setItem(
      "@system_user",
      JSON.stringify({ username, token, password })
    );

    setUserData({ ...userData, username: username, token: token, password: password });
  }

  function emptyUserData() {
    setUserData({ username: "", password: "", token: "" });
  }

  useEffect(() => {
    const response = localStorage.getItem("@system_user");

    let user;

    if (response) {
      user = JSON.parse(response);

      fillUserDataState({
        username: user.username,
        token: user.token,
        password: user.password,
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userData,
        fillUserDataState,
        emptyUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;