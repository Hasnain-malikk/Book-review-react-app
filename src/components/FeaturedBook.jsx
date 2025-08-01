const FeaturedBook = () => {
  return (
    <div className="mt-10 bg-indigo-100 p-6 rounded-xl flex gap-6 items-center max-w-5xl mx-auto">
      <img src="/book-cover.png" alt="Book" className="w-32 h-48 object-cover rounded-md" />
      <div>
        <h2 className="text-xl font-bold text-indigo-700">The Great Gatsby</h2>
        <p className="mt-2 text-gray-700">A classic novel by F. Scott Fitzgerald that explores themes of wealth, love, and the American Dream.</p>
      </div>
    </div>
  );
};

export default FeaturedBook;
