"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProfileNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
      <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        {/* Logo */}
        <div className="text-indigo-500 md:order-1">
          <Image
            src="/skbbelitung.png"
            alt="skbbelitunglogo"
            width={40}
            height={40}
          />
        </div>
        <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
          <ul className="flex font-semibold justify-between">
            <li className="md:px-4 md:py-2 hover:text-indigo-400">
              <Link href="/">Beranda</Link>
            </li>
            <li className="md:px-4 md:py-2 hover:text-indigo-400 relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center"
              >
                Program
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                  <li className="hover:bg-gray-100">
                    <Link href="/kesetaraan" className="block px-4 py-2">
                      Kesetaraan
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link href="/paud" className="block px-4 py-2">
                      PAUD
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link href="/tbm" className="block px-4 py-2">
                      TBM
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="md:px-4 md:py-2 hover:text-indigo-400">
              <Link href="/tentangkami">Tentang Kami</Link>
            </li>
            <li className="md:px-4 md:py-2 hover:text-indigo-400">
              <Link href="/sign-in">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ProfileNavbar;
