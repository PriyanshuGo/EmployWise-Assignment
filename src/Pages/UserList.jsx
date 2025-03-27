import { useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../contextCreate/Userdata";

function UserList() {
  const { user, setUser, loading } = useContext(UserContext);
  const { allUser, page } = user;

  const baseURl = "https://reqres.in";

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${baseURl}/api/users?page=${page}`);
      setUser((prev) => ({ ...prev, allUser: res.data.data, loading: false }));
    } catch (error) {
      console.error("Error fetching users:", error);
    //   setUser((prev) => ({ ...prev, loading: false }));
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
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {allUser.map((user) => (
        <div
          key={user.id}
          className="bg-white p-4 rounded shadow-md flex items-center"
        >
          <img
            src={user.avatar}
            alt={user.first_name}
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold">
              {user.first_name} {user.last_name}
            </h3>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default UserList;
