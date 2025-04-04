import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contextCreate/Userdata";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function EditUser() {
  const { editingUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [updatedUser, setUpdatedUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    id: "",
  });

  const [error, setError] = useState("");
  const baseURl = "https://reqres.in";

  useEffect(() => {
    if (editingUser) {
      console.log("📝 Editing user:", editingUser);
      setUpdatedUser({
        first_name: editingUser.first_name,
        last_name: editingUser.last_name,
        email: editingUser.email,
        id: editingUser.id,
      });
    }
  }, [editingUser]);

  const handleUpdate = async () => {
    setError("");
    try {
      console.log("🔄 Updating user:", updatedUser);
      const res = await axios.put(
        `${baseURl}/api/users/${updatedUser.id}`,
        updatedUser
      );
      console.log("✅ User updated successfully:", res.data);
      navigate("/");
      alert("User Updated.")
    } catch (error) {
      setError("Failed to update user. Please try again.");
    }
  };

  if (!editingUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow w-96">
        <h2 className="text-lg font-medium mb-4">Edit User</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <input
          type="text"
          required
          value={updatedUser.first_name}
          onChange={(e) =>
            setUpdatedUser({ ...updatedUser, first_name: e.target.value })
          }
          className="w-full p-2 mb-2 border border-gray-300 rounded bg-gray-100"
        />
        <input
          type="text"
          required
          value={updatedUser.last_name}
          onChange={(e) =>
            setUpdatedUser({ ...updatedUser, last_name: e.target.value })
          }
          className="w-full p-2 mb-2 border border-gray-300 rounded bg-gray-100"
        />
        <input
          type="email"
          required
          value={updatedUser.email}
          onChange={(e) =>
            setUpdatedUser({ ...updatedUser, email: e.target.value })
          }
          className="w-full p-2 mb-4 border border-gray-300 rounded bg-gray-100"
        />
        <div className="flex justify-center space-x-2">
          <button
            className="px-4 py-2 border border-gray-400 rounded bg-gray-100 hover:bg-gray-200 hidden md:block"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <button
            className="px-4 py-2 border border-gray-400 rounded bg-gray-100 hover:bg-gray-200"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
