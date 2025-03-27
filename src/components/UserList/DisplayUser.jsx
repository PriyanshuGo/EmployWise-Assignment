function DisplayUser({ allUser }) {
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
    </div>
  );
}

export default DisplayUser;
