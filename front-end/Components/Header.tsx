import Link from "next/link";
import React, { useEffect, useState } from "react"

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

    useEffect(() => {
      setLoggedInUser(localStorage.getItem('loggedInUser'));
    }, []);

    const handleLogOut = () => {
      localStorage.removeItem('loggedInUser');
      setLoggedInUser(null);
    };

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="flex z-50 fixed">
            <button
            className="bg-black h-screen w-20 flex items-start justify-center fixed z-50 outline outline-1 outline-white 
                      max-lg:left-2.5 max-lg:top-3/4 max-lg:w-10 max-lg:h-10"
            onClick={handleOpen}
          >
            <div className="pt-9 space-y-1 max-lg:pt-2.5">
              <span
                className={`block h-1 w-10 bg-white transition-transform duration-300 max-lg:w-5 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`block h-1 w-10 bg-white transition-opacity duration-300 max-lg:w-5 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`block h-1 w-10 bg-white transition-transform duration-300  max-lg:w-5 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </div>
          </button>
          <div
            className={`fixed inset-0  bg-black text-4xl flex justify-center items-center gap-12 transition-all duration-500 max-lg:flex-col max-lg:text-4xl ${
              isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
            }`}
          >
            <Link onClick={handleOpen} href={'/'} className="font-noto-serif-jp text-blue-800 font-bold hover:text-white transition-all ease-in-out">
              Introduction
            </Link>
            <Link href={'/'} className="font-noto-serif-jp text-blue-800 font-bold hover:text-white transition-all ease-in-out">
              Characters
            </Link>
            <Link href={'/'} className="font-noto-serif-jp text-blue-800 font-bold hover:text-white transition-all ease-in-out">
              Chapters
            </Link>
            <Link href={'/draftChapters'} className="font-noto-serif-jp text-blue-800 font-bold hover:text-white transition-all ease-in-out">
              Draft Chapters
            </Link>
            {!loggedInUser && <Link href={'/login'} className="font-noto-serif-jp text-blue-800 font-bold hover:text-white transition-all ease-in-out">
              Login
            </Link>}
            {loggedInUser && <Link onClick={() => {handleLogOut(), handleOpen()}} href={'/'} className="font-noto-serif-jp font-bold text-blue-800 hover:text-white transition-all ease-in-out">
              {JSON.parse(loggedInUser).username.length < 10 && <>Log out, {JSON.parse(loggedInUser).username}</> || <>Log out, {JSON.parse(loggedInUser).username.substring(0,9)}...</>}
            </Link>}
          </div>
        </div>
      );
}

export default Header;