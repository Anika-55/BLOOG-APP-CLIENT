"use client";

import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-12">
      <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo / Brand */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            MyBlog
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-xs">
            Sharing ideas, stories, and insights — a place to inspire and connect.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#posts" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                Posts
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#create" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                Write a Post
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex flex-col">
          <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <FaTwitter size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-6 text-center text-gray-600 dark:text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} MyBlog. All rights reserved.
      </div>
    </footer>
  );
}
