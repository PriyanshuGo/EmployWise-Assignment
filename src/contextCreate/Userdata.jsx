import { useState, createContext } from "react";

export const UserContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [user, setUser] = useState({
    alluser: [],
    page: 1,
    loading: true,
  });

  const [editingUser, setEditingUser] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser, editingUser, setEditingUser }}>
      {children}
    </UserContext.Provider>
  );
};
