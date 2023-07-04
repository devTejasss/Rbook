import React from 'react';
import { useSpring, animated } from 'react-spring';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const slideIn = useSpring({
    from: { transform: 'translateY(-50px)', opacity: 0 },
    to: { transform: 'translateY(0px)', opacity: 1 },
    config: { duration: 1000 },
  });

  const scaleIn = useSpring({
    from: { transform: 'scale(0.8)', opacity: 0 },
    to: { transform: 'scale(1)', opacity: 1 },
    config: { duration: 1000 },
  });

  const rotateIn = useSpring({
    from: { transform: 'rotate(0deg)', opacity: 0 },
    to: { transform: 'rotate(360deg)', opacity: 1 },
    config: { duration: 2000 },
  });

  return (
    <div className="bg-gray-100">
      <animated.div style={fadeIn} className="w-full bg-white py-10">
        <div className="max-w-screen-lg mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">
            Welcome to our Bookstore!
          </h1>
          <p className="text-lg text-center mb-10">
            Browse our selection of books and find your next favorite read.
          </p>
          <div className="flex justify-center mb-10">
            <Image src="/formbg1.jpg" alt="Books" width={800} height={400} />
          </div>
          <div className="flex justify-center">
            <Link href="/books">
              <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Browse Books
              </a>
            </Link>
          </div>
        </div>
      </animated.div>
      <animated.div style={slideIn} className="w-full bg-white py-10">
        <div className="max-w-screen-lg mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">
            Sell Your Books With Us
          </h2>
          <p className="text-lg text-center mb-10">
            We make it easy to sell your books online. Get started today!
          </p>
          <div className="flex justify-center mb-10">
            <Image
              src="/formbg1.jpg"
              alt="Sell Books"
              width={800}
              height={400}
            />
          </div>
          <div className="flex justify-center">
            <Link href="/sell">
              <a className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Sell Your Books
              </a>
            </Link>
          </div>
        </div>
      </animated.div>
       <animated.div style={scaleIn} className="w-full bg-blue-400 ">
        <div className="max-w-screen-lg mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">
            Featured Books
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/TheSilentPatient.webp"
                alt="Book Cover"
                width={350}
                height={400}
              />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">The Great Gatsby</h3>
                <p className="text-gray-700 leading-tight">
                  F. Scott Fitzgerald's third book, stands as the supreme
                  achievement of his career. This exemplary novel of the Jazz
                  Age has been acclaimed by generations of readers.
                </p>
                <div className="flex items-center mt-4">
                  <div className="font-bold text-xl">$15.99</div>
                  <div className="ml-2 text-gray-600">In Stock</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/TheSilentPatient.webp"
                alt="Book Cover"
                width={350}
                height={400}
              />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">
                  To Kill a Mockingbird
                </h3>
                <p className="text-gray-700 leading-tight">
                  Harper Lee's Pulitzer prize-winning masterwork of honor and
                  injustice in the deep South—and the heroism of one man in the
                  face of blind and violent hatred.
                </p>
                <div className="flex items-center mt-4">
                  <div className="font-bold text-xl">$12.99</div>
                  <div className="ml-2 text-gray-600">In Stock</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg ">
              <Image
                src="/TheSilentPatient.webp"
                alt="Book Cover"
                width={350}
                height={400}
              />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">
                  The Catcher in the Rye
                </h3>
                <p className="text-gray-700 leading-tight">
                  Anyone who has read J.D. Salinger's New Yorker stories,
                  particularly A Perfect Day for Bananafish, Uncle Wiggily in
                  Connecticut, The Laughing Man, and For Esme--With Love and
                  Squalor, will not be surprised by the fact that his first
                  novel is full of children.
                </p>
                <div className="flex items-center mt-4">
                  <div className="font-bold text-xl">$9.99</div>
                  <div className="ml-2 text-gray-600">In Stock</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/TheSilentPatient.webp"
                alt="Book Cover"
                width={350}
                height={400}
              />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">1984</h3>
                <p className="text-gray-700 leading-tight">
                  1984 is a dystopian novella by George Orwell published in
                  1949, which follows the life of Winston Smith, a low ranking
                  member of 'the Party', who is frustrated by the omnipresent
                  eyes of the party, and its ominous ruler Big Brother.
                </p>
                <div className="flex items-center mt-4">
                  <div className="font-bold text-xl">$14.99</div>
                  <div className="ml-2 text-gray-600">In Stock</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </animated.div> 
    </div>
  );
};

export default HomePage;
