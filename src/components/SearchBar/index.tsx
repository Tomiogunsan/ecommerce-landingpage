

const SearchBar = () => {
  return (
    <form className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1">
      <input
        type="text"
        name="name"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none"
      />
      <button className="cursor-pointer">
        <img src="/search.png" alt="search" className="w-4 h-4" />
      </button>
    </form>
  );
}

export default SearchBar