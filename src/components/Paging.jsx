function Paging({ setUser }) {
    return (
      <div className="flex justify-center space-x-6">
        <button
          onClick={() =>
            setUser((prev) => ({
              ...prev,
              page: Math.max(prev.page - 1, 1),
            }))
          }
          className="cursor-pointer border border-black p-2 my-10"
        >
          Previous
        </button>
        <button
          onClick={() => {
            setUser((prev) => ({ ...prev, page: prev.page + 1 }));
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="cursor-pointer border border-black p-2 my-10"
        >
          Next
        </button>
      </div>
    );
  }
  
  export default Paging;
  