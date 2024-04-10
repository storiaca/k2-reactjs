import React from 'react';
import HeadingComponent from './HeadingComponent';
// icons
import { CiUser, CiHeart, CiShoppingCart } from 'react-icons/ci';

// logo
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
    <div>
      <HeadingComponent />
      <nav className="bg-mainBlue h-[100px]">
        <div className="container mx-auto flex items-center h-full justify-between">
          {/* Logo */}
          <div>
            <Link to={'/'}>
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          {/* Search Bar */}
          <div className="bg-whiteTextColor rounded-[20px]">
            <input
              className="bg-transparent outline-none px-[25px] py-[17px]"
              type="text"
              placeholder="Search product"
            />
            <button className="bg-mainYellow text-whiteTextColor px-[25px] py-[17px] rounded-[20px]">
              Search
            </button>
          </div>

          {/* Links */}
          <div className="">
            <ul className="flex-center gap-5">
              <li className="flex-center">
                <CiUser color="white" size={25} />
                <Link to="/" className="text-whiteTextColor">
                  Sign In
                </Link>
              </li>
              <li className="flex-center gap-2">
                <div className="flex-center">
                  <CiHeart color="white" size={25} />
                  <span className="badge">0</span>
                </div>
                <Link to="/" className="text-whiteTextColor">
                  Favorite
                </Link>
              </li>
              <li className="flex-center gap-2">
                <div className="flex-center">
                  <CiShoppingCart color="white" size={25} />
                  <span className="badge-2">0</span>
                </div>
                <Link to="/cart" className="text-whiteTextColor">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarComponent;
