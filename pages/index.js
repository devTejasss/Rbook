import React from 'react';

import { client } from '../lib/client';
import { useAuth } from '../context/AuthContext';
import { Product, FooterBanner, HeroBanner, Carousel, Login, UserDashboard } from '../components';

const Home = ({ products, bannerData }) => {
  // const { currentUser } = useAuth();
  
  return (
    <div>
      {/* <Carousel/> */}
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Selling Books</h2>
        <p>Books, like friends to comfort and instruct us</p>
      </div>

      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />

      {/* <div>
        {currentUser ? `Logged in as ${currentUser.email}` : 'Not logged in'}
      </div> */}

      {/* {!currentUser && <Login />}
      {currentUser && <UserDashboard/>} */}
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  };
};

export default Home;
