import { FaSearch } from "react-icons/fa";
function Search({ search, setSearch }) {
  return (
    <div className="max-w-xl mx-auto mb-8 relative">
      <FaSearch className="absolute right-4 top-3.5 text-gray-400" />

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="جستجو در مقالات..."
        className="w-full py-3 pr-10 pl-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
      />
    </div>
  );
}
export default Search;
