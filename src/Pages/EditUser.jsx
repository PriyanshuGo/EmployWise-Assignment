import { useContext, useState, useEffect} from "react";
import { UserContext } from "../contextCreate/Userdata";
import { useNavigate } from "react-router-dom";

function EditUser() {
  const { editingUser, setEditingUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [updatedUser, setUpdatedUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  useEffect(() => {
    if (editingUser) {
      setUpdatedUser({
        first_name: editingUser.first_name,
        last_name: editingUser.last_name,
        email: editingUser.email,
      });
    }
  }, [editingUser]);

  if (!editingUser) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow w-96">
        <h2 className="text-lg font-medium mb-4">Edit User</h2>
        <input
          type="text"
          value={updatedUser.first_name}
          onChange={(e) =>
            setUpdatedUser({ ...updatedUser, first_name: e.target.value })
          }
          className="w-full p-2 mb-2 border border-gray-300 rounded bg-gray-100"
        />  
        <input
          type="text"
          value={updatedUser.last_name}
          onChange={(e) =>
            setUpdatedUser({ ...updatedUser, last_name: e.target.value })
          }
          className="w-full p-2 mb-2 border border-gray-300 rounded bg-gray-100"
        />
        <input
          type="email"
          value={updatedUser.email}
          onChange={(e) =>
            setUpdatedUser({ ...updatedUser, email: e.target.value })
          }
          className="w-full p-2 mb-4 border border-gray-300 rounded bg-gray-100"
        />
        <div className="flex justify-center space-x-2">
          <button
            className="px-4 py-2 border border-gray-400 rounded bg-gray-100 hover:bg-gray-200"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <button
            className="px-4 py-2 border border-gray-400 rounded bg-gray-100 hover:bg-gray-200"
            onClick={() => setEditingUser(null)}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
