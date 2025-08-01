const BookCard = ({ title, rating, description }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-xl w-full sm:w-64">
      <h3 className="font-semibold text-lg text-indigo-700">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      <div className="mt-4 text-yellow-400">⭐ {rating}/5</div>
    </div>
  );
};

export default BookCard;
