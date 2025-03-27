import { useContext } from "react";
import { UserContext } from "../contextCreate/Userdata";
import { useNavigate } from "react-router-dom";

function EditUser() {
  const { editingUser, setEditingUser } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow w-96">
        <h2 className="text-lg font-medium mb-4">Edit User</h2>
        <input
          type="text"
          value={editingUser.first_name}
          className="w-full p-2 mb-2 border border-gray-300 rounded bg-gray-100"
          readOnly
        />
        <input
          type="text"
          value={editingUser.last_name}
          className="w-full p-2 mb-2 border border-gray-300 rounded bg-gray-100"
          readOnly
        />
        <input
          type="email"
          value={editingUser.email}
          className="w-full p-2 mb-4 border border-gray-300 rounded bg-gray-100"
          readOnly
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
