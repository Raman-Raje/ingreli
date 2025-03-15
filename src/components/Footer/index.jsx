import React, { useState } from 'react';
import Link from 'next/link';
import { legal, resources, connect } from '@/constants/links';
import { Mail } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="bg-[#155f5a] text-[#d3e5df] pt-16 pb-8">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="bg-[#eff5e6] rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-[#507c6b]">
              <p className="text-lg">
                Ready to Take Control of Your Health?{' '}
                <span className="font-semibold text-[#155f5a]">Signup weekly newsletter</span>
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="flex flex-wrap w-full md:w-auto gap-2">
              <div className="flex items-center bg-white rounded-lg px-4 py-2 w-full md:w-80">
                <Mail size={18} className="text-[#07b084] mr-2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="flex-1 text-gray-800 focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto bg-[#07b084] hover:bg-[#06946d] text-white px-6 py-2 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>

          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-container">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
          <div>
            <a href="/" className="text-2xl font-semibold mb-4 block text-[#d3e5df]">
              ingreli
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-3">
              {legal.map(({ label, path }) => (
                <li key={label}>
                  <Link
                    href={path}
                    className="text-[#d3e5df] hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-3">
              {resources.map(({ label, path }) => (
                <li key={label}>
                  <Link
                    href={path}
                    className="text-[#d3e5df] hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Connect</h4>
            <ul className="space-y-3">
              {connect.map(({ label, path }) => (
                <li key={label}>
                  <Link
                    href={path}
                    className="text-[#d3e5df] hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
        {/* Bottom Bar */}
        <div className="border-t border-[#0e4a45] pt-6 px-4 flex flex-col md:flex-row justify-between items-center text-sm text-[#d3e5df]">
          <p>
            © {new Date().getFullYear()} ingreli. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Made with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
