import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import AuthContext from '../context/AuthContext';
import {
  AiOutlineShopping,
  AiOutlineShop,
  AiOutlineUser,
} from 'react-icons/ai';
import { GiEvilBook } from 'react-icons/gi';
import { useRouter } from 'next/router';

import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const { user, login, logout, authReady } = useContext(AuthContext);
  console.log(user);
  const router = useRouter();

  // const [openModal, setOpenModal] = useState(false)

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">
          <img
            className="navimg"
            src="/logo.png"
            alt="Logo"
            width="150"
            height="80"
          />
        </Link>
      </p>
      {/* { authReady && ( */}
      <div className="navbar-container">
        {user && (
          <button
            type="button"
            className="cart-icon"
            onClick={() => router.push('/sellerinfo')}
            title="Secondhand Marketplace"
          >
            <GiEvilBook />
          </button>
        )}

        {user && (
          <button
            type="button"
            className="cart-icon"
            onClick={() => router.push('/Form')}
            title="Sell Book"
          >
            <AiOutlineShop />
          </button>
        )}

        <button
          type="button"
          className="cart-icon"
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>

        {!user && (
          <button type="button" onClick={login} className="btnn">
            Login/Signup
          </button>
        )}

        {user && <button className="btnn">{user.email}</button>}

        {user && (
          <button type="button" onClick={logout} className="btnn">
            Logout
          </button>
        )}

        {/* {openModal && <Modal setOpenModal={setOpenModal} />}
            <div className='sticky top-0 w-full left-0 bg-inherit flex items-center justify-between p-4 border-b border-solid border-white'>
                <i link={Login} onClick={() => setOpenModal(true)} className="fa-regular fa-user text-xl cart-icon"></i>
            </div> */}

        {/* <button type="button" className="cart-icon" onClick={Login}>
        <AiOutlineUser />
      </button> */}
        {/* <i onClick={""} className="cart-icon"></i> */}
      </div>
      {/* )} */}
      {/* <Cart/> */}

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;

// export default Navbar
// import React from 'react';
// import { AiOutlineShopping, AiOutlineShop } from 'react-icons/ai';
// import Link from 'next/link';
// import Cart from './Cart';
// import { useStateContext } from '../context/StateContext';

// const Navbar = () => {

//   const { showCart, setShowCart, totalQuantities } = useStateContext();

//   return (
//     <nav>
//       <Link href="/">
//         <a>
//           <img className="navimg" src="/logo.png" alt="Logo" />
//         </a>
//       </Link>
//       <ul>
//         <button type="button" className="cart-icon" onClick="" >
//         <li>
//           <Link href="/">
//             <a>
//               <AiOutlineShop />
//             </a>
//           </Link>
//         </li>
//         </button>
//         <button type="button" className="cart-icon" onClick="" >
//         <li>
//           {/* <Link href="/"> */}
//             <a>
//               <AiOutlineShopping />
//               <span className="cart-item-qty">1</span>
//             </a>
//           {/* </Link> */}
//         </li>
//         </button>
//         {showCart && <Cart/>}
//       </ul>

//       {/* {showCart && <Cart/>} */}

//       <style jsx>{`
//         nav {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 1rem;
//           margin: 6px 18px;
//           position: relative;
//         }

//         .navimg {
//           height: 3rem;
//         }

//         ul {
//           display: flex;
//           list-style: none;
//           margin: 0;
//           padding: 0;
//         }

//         li {
//           margin-left: 1rem;
//         }

//         a {
//           color: black;
//           text-decoration: none;
//         }
//       `}</style>
//     </nav>
//   );
// };

// export default Navbar;
