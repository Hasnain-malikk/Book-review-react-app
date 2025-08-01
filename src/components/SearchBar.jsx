const SearchBar = () => {
  return (
    <div className="w-full max-w-xl mx-auto mt-8">
      <input
        type="text"
        placeholder="Search for a book..."
        className="w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
    </div>
  );
};

export default SearchBar;
