import { useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../contextCreate/Userdata";
import Paging from "../components/Paging";

function UserList() {
  const { user, setUser } = useContext(UserContext);
  const { allUser, page, loading } = user;

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
    <div>
      <div className="p-4 flex flex-wrap justify-center gap-4">
        {allUser.map((user) => (
          <div
            key={user.id}
            className="bg-white p-4 rounded-lg shadow-md flex items-center w-full xs:w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 transition-all duration-300 hover:shadow-lg"
          >
            <img
              src={user.avatar}
              alt={user.first_name}
              className="w-16 h-16 rounded-full mr-4 object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {user.first_name} {user.last_name}
              </h3>
              <p className="text-gray-600 text-sm">{user.email}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <Paging />
      </div>
    </div>
  );
}
export default UserList;
