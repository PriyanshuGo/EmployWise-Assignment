export default function SearchFilter({ searchUser, setSearchUser }) {
  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        placeholder="Search Users..."
        className="w-1/2 p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        value={searchUser}
        onChange={(e) => setSearchUser(e.target.value)}
      />
    </div>
  );
}
