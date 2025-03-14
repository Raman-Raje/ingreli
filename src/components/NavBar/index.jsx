import React, { useState } from 'react';
import Link from 'next/link';
import { contactMail } from '@/constants/categories';
import { Menu, X } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-green-50 py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-900">Ingreli</div>

        {/* Navigation Links (Hidden on small screens) */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <ScrollLink
              to="pricing"
              smooth={true}
              duration={500} // Smooth scrolling duration
              className="!text-green-800 hover:!text-green-600"
            >
              Pricing
            </ScrollLink>
          </li>
          <li>
            <Link href="/blogs" className="!text-green-800 hover:!text-green-600">
              Blogs
            </Link>
          </li>
          <li>
            <a href={`mailto:${contactMail}`} className="!text-green-800 hover:!text-green-600">
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
        <div className='back-to-container'>
          <div className="md:hidden absolute top-14 left-0 w-full bg-green-50 shadow-md z-10">
            <ul className="flex flex-col space-y-4 py-4 px-6 text-green-800">
              <li>
                <ScrollLink
                  to="pricing"
                  smooth={true}
                  duration={500} // Smooth scrolling duration
                  className="text-green-800 hover:text-green-600"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </ScrollLink>
              </li>
              <li>
                <Link href="/blogs" className=" hover:text-green-600" onClick={() => setIsOpen(false)}>
                  Blogs
                </Link>
              </li>
              <li>
                <a href={`mailto:${contactMail}`} className=" hover:text-green-600" onClick={() => setIsOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

