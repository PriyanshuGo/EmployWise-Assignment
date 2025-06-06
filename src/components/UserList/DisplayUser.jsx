function DisplayUser({
  allUser,
  handleEditUser,
  handleDeleteUser,
  searchUser,
}) {
  const result = allUser.filter((el) => {
    return (
      el.first_name.toLowerCase().includes(searchUser.toLowerCase()) ||
      el.last_name.toLowerCase().includes(searchUser.toLowerCase())
    );
  });
  return (
    <div>
      <div className="p-4 flex flex-wrap justify-center gap-4">
        {result.map((user) => (
          <div
            key={user.id}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center w-full xs:w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 transition-all duration-300 hover:shadow-lg"
          >
            <img
              src={user.avatar}
              alt={user.first_name}
              className="w-16 h-16 rounded-full object-cover mb-3"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {user.first_name} {user.last_name}
              </h3>
              <p className="text-gray-600 text-sm">{user.email}</p>
            </div>
            <div className="mt-3 flex space-x-2">
              <button
                onClick={() => handleEditUser(user)}
                className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteUser(user.id)}
                className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayUser;
