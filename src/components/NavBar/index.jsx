import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log("Navbar");
  console.log(isOpen);

  return (
    <nav className="w-full bg-green-50 py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-900">Ingreli</div>

        {/* Navigation Links (Hidden on small screens) */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#pricing" className="!text-green-800 hover:!text-green-600">
              Pricing
            </a>
          </li>
          <li>
            <Link href="/blog" className="!text-green-800 hover:!text-green-600">
              Blog
            </Link>
          </li>
          <li>
            <a href="#contact" className="!text-green-800 hover:!text-green-600">
              Contact
            </a>
          </li>
        </ul>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-green-800 cursor-pointer hover:text-green-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-14 left-0 w-full bg-green-50 shadow-md z-10">
          <ul className="flex flex-col space-y-4 py-4 px-6 text-green-800">
            <li>
              <Link href="/" className="font-semibold text-black" onClick={() => setIsOpen(false)}>
                App
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-green-600" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/articles" className="hover:text-green-600" onClick={() => setIsOpen(false)}>
                Articles
              </Link>
            </li>
            <li>
              <Link href="/newsletter" className="hover:text-green-600" onClick={() => setIsOpen(false)}>
                Newsletter
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};


export default Navbar;

