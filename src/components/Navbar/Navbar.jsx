import React from 'react'

const Navbar = () => {
      return (
        <div className="flex items-center justify-between p-4 bg-teal-800 text-white shadow-md">
          {/* Logo dan Nama Brand */}
          <div className="flex items-center space-x-2">
            <img src="path-to-logo.svg" alt="Logo" className="h-8 w-8" />
            <span className="text-lg font-bold">Kambingfresh</span>
          </div>
    
          {/* Search Bar */}
          <div className="flex items-center w-full max-w-lg px-4 py-2 bg-gray-200 rounded-full">
            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.53 20.47l-4.45-4.45a8 8 0 10-1.06 1.06l4.45 4.45a.75.75 0 001.06-1.06zM10 17a7 7 0 110-14 7 7 0 010 14z" />
            </svg>
            <input
              type="text"
              placeholder="Pencarian"
              className="w-full ml-2 bg-transparent outline-none text-gray-600 placeholder-gray-500"
            />
          </div>
    
          {/* Ikon dan Profil */}
          <div className="flex items-center space-x-4">
            {/* Ikon lain */}
            <button className="text-gray-300 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
            <button className="text-gray-300 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18l-1.5 9h-15L3 3zm0 0v6h18V3m-1 6l-.328 1.314a4 4 0 01-3.992 3.186H7.32a4 4 0 01-3.992-3.186L3 9h18z" />
              </svg>
            </button>
            <button className="text-gray-300 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-4.215A2 2 0 0016.705 11h-3.41a2 2 0 00-1.89 1.295L10 17h5zm-3-1V9a3 3 0 015.83-1H8.17a3 3 0 015.83 1v7m-5 4h6" />
              </svg>
            </button>
    
            {/* Nama Pengguna */}
            <div className="flex items-center space-x-2">
              <img src="path-to-avatar.jpg" alt="User Avatar" className="w-8 h-8 rounded-full" />
              <span className="text-sm">Hijau Mandala</span>
            </div>
          </div>
        </div>
      );
    }

    export default Navbar;
