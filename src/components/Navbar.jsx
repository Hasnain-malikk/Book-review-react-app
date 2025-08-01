const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-indigo-600">BookReview</h1>
      <ul className="flex gap-6 text-gray-700">
        <li>Home</li>
        <li>Books</li>
        <li>Reviews</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
