import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import FeaturedBook from "./components/FeaturedBook";
import BookCard from "./components/BookCard";
import ReviewSection from "./components/ReviewSection";

const App = () => {
  const books = [
    {
      title: "1984",
      rating: 4.5,
      description: "A dystopian novel by George Orwell."
    },
    {
      title: "To Kill a Mockingbird",
      rating: 4.8,
      description: "A story of justice and racial prejudice."
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <SearchBar />
      <FeaturedBook />
      <div className="flex flex-wrap justify-center gap-6 mt-10 px-4">
        {books.map((book, idx) => (
          <BookCard key={idx} {...book} />
        ))}
      </div>
      <ReviewSection />
    </div>
  );
};

export default App;
