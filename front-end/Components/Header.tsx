import Link from "next/link";
import React, { useState } from "react"

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="flex">
          <button
            className="bg-red-400 h-screen w-20 flex items-start justify-center fixed z-50"
            onClick={handleOpen}
          >
            <p className="pt-9">{isOpen ? "X" : "="}</p>
          </button>
          <div
            className={`fixed inset-0  bg-slate-600 text-4xl flex justify-center items-center gap-12 transition-all duration-500 ${
              isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
            }`}
          >
            <Link onClick={handleOpen} href={'/'} className="hover:text-white">
              Introduction
            </Link>
            <Link href={'/'} className="hover:text-white">
              Characters
            </Link>
            <Link href={'/'} className="hover:text-white">
              Chapters
            </Link>
            <Link href={'/'} className="hover:text-white">
              Draft Chapters
            </Link>
            <Link href={'/login'} className="hover:text-white">
              Login
            </Link>
          </div>
        </div>
      );
}

export default Header;