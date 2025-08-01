const ReviewSection = () => {
  return (
    <div className="mt-10 max-w-4xl mx-auto px-4">
      <h3 className="text-xl font-bold text-gray-800">Community Reviews</h3>
      <div className="mt-4 space-y-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-700">"Absolutely loved this book! The writing is stunning."</p>
          <span className="text-sm text-gray-500">— Jane Doe</span>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-700">"An emotional rollercoaster, but so worth it."</p>
          <span className="text-sm text-gray-500">— John Smith</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
