import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import database from '../firebase';
import { child, get, ref } from 'firebase/database';
import { FaSearch } from 'react-icons/fa';

function SellersData() {
  const [bookData, setBookData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await get(child(ref(database), 'bookSellingData'));
      const bookDataArray = [];
      data.forEach((book) => {
        const bookObject = {
          id: book.key,
          ...book.val(),
        };
        bookDataArray.push(bookObject);
      });
      setBookData(bookDataArray);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = bookData.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBooks(filtered);
  }, [searchQuery, bookData]);

  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 4000 },
  });

  return (
    <div className="seller-data-container">
      <animated.div
        style={fade}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-3xl font-bold text-black text-center mb-10">
          Books for Sale
        </h1>
        <div className="search-container">
          <input
            className="search-bar"
            type="text"
            placeholder="Search books by title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="search-icon">
            <FaSearch />
          </span>
        </div>
        <div className="flex flex-wrap gap-6">
          {filteredBooks.map((book) => (
            <div key={book.id} className="book-info-container flex-grow">
              <div className="px-4 py-5 sm:p-6">
                <p className="text-black font-bold text-lg mb-2">Book Title:</p>
                <p className="text-black text-xl font-bold mb-4">
                  {book.title}
                </p>
                <p className="text-black font-bold text-lg mb-2">
                  Expected Price:
                </p>
                <p className="text-black text-xl font-bold mb-4">
                  ₹{book.price}
                </p>
                <p className="text-black font-bold text-lg mb-2">
                  Contact Number:
                </p>
                <p className="text-black text-lg mb-4">{book.phoneNumber}</p>
                <p className="text-black font-bold text-lg mb-2">Email:</p>
                <p className="text-black text-lg">{book.email}</p>
              </div>
            </div>
          ))}
        </div>
      </animated.div>
    </div>
  );
}

export default SellersData;