import DarkModeToggle from "./DarkModeToggle";
import avatar from "../assets/avatar.svg";
import { useState, useEffect, useRef } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="sticky top-0 z-40 w-full backdrop-blur flex-none border-b border-slate-900/10 dark:border-slate-50/[0.06] bg-slate-50 dark:bg-slate-950">
      <div className="flex justify-between">
        <div className="title">
          <h1 className="text-3xl font-bold p-2 text-slate-900 dark:text-white">
            Header Section
          </h1>
        </div>
        <div className="flex flex-row items-center">
          <div className="mr-3 mt-2">
            <DarkModeToggle />
          </div>
          <div ref={dropdownRef} className="mr-3">
            <button
              onClick={toggleDropdown}
              className="relative inline-block text-left"
            >
              <div className="size-10 rounded-full overflow-hidden">
                <img src={avatar} alt="Member" />
              </div>
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-950 border dark:border-slate-50/[0.06] rounded-md shadow-lg">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Settings
                  </a>
                  <hr className="my-2 border-slate-900/10 dark:border-slate-50/[0.1]" />
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Logout
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
