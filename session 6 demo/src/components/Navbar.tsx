import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-[#152114] py-2 shadow-md z-50">
      <ul className="flex justify-center list-none m-0 p-0">
        <li className="mx-5">
          <Link to="/" className="text-white no-underline text-lg font-bold">Home</Link>
        </li>
        <li className="mx-5">
          <Link to="/cafes" className="text-white no-underline text-lg font-bold">Cafes</Link>
        </li>
        <li className="mx-5">
          <Link to="/food" className="text-white no-underline text-lg font-bold">Food</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
