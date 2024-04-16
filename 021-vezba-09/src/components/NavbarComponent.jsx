import React from 'react';
import { Link } from 'react-router-dom';
import HeadingComponent from './HeadingComponent';
import CategoryComponent from './CategoryComponent';
// clerk
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/clerk-react';
// icons
import { CiUser, CiHeart, CiShoppingCart } from 'react-icons/ci';
import logo from '../assets/logo.png';

function NavbarComponent() {
  return (
    <div>
      <HeadingComponent />
      <nav className="bg-mainBlue h-[100px] flex">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <div className="bg-whiteTextColor rounded-[20px]">
            <input
              className="bg-transparent outline-none px-[25px] py-[17px]"
              type="text"
              placeholder="Search product"
            />
            <button className="px-[25px] py-[17px] text-whiteTextColor bg-mainYellow rounded-[20px]">
              Search
            </button>
          </div>
          <div className="">
            <ul className="flex-center gap-4 text-whiteTextColor">
              <li className="flex-center gap-1">
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </li>
              <li className="flex-center">
                <div className="flex-center gap-1">
                  <CiHeart color="white" size={25} />
                  <span className="badge">0</span>
                </div>
                <Link to="/">Favorite</Link>
              </li>
              <li className="flex-center">
                <div className="flex-center gap-1">
                  <CiShoppingCart color="white" size={25} />
                  <span className="badge">0</span>
                </div>
                <Link to={'/cart'}>Cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <CategoryComponent />
    </div>
  );
}

export default NavbarComponent;
