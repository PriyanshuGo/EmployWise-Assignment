import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../contextCreate/Userdata";
import Paging from "../components/UserList/Paging";
import DisplayUser from "../components/UserList/DisplayUser";
import { useNavigate } from "react-router-dom";
import SearchFilter from "../components/UserList/SearchFilter";

function UserList() {
  const { user, setUser, editingUser, setEditingUser } =
    useContext(UserContext);
  const { allUser, page, loading } = user;
  const navigate = useNavigate();
  const [searchUser, setSearchUser] = useState("");

  const baseURl = "https://reqres.in";

  useEffect(() => {
    console.log("📡 Fetching users for page:", page);
    fetchUsers();
  }, [page, editingUser]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${baseURl}/api/users?page=${page}`);
      const data = res.data.data;
      setUser((prev) => ({ ...prev, allUser: data, loading: false }));
      if (data.length === 0) {
        alert("No more results found");
        setUser((prev) => ({
          ...prev,
          page: Math.max(prev.page - 1, 1),
        }));
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setUser((prev) => ({ ...prev, loading: false }));
    }
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    navigate("/editUser");
  };

  const handleDeleteUser = async (id) => {
    try {
      console.log("🗑 Attempting to delete user with ID:");
      const res = await axios.delete(`${baseURl}/api/users/${id}`);
      alert("✅ User deleted successfully:");
    } catch (error) {
      alert("Failed to delete user. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div>
      <p className="text-center text-2xl font-semibold text-gray-800 bg-gray-200 py-2 rounded-md shadow-md">
        User List
      </p>
      <SearchFilter searchUser={searchUser} setSearchUser={setSearchUser} />
      <DisplayUser
        allUser={allUser}
        handleEditUser={handleEditUser}
        handleDeleteUser={handleDeleteUser}
        searchUser={searchUser}
      />
      {searchUser ? null : (
        <div className="flex justify-center mt-4">
          <Paging setUser={setUser} />
        </div>
      )}
    </div>
  );
}
export default UserList;
