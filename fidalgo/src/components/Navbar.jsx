import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineBookmarkAdd, MdOutlineSearch  } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import logo from '../assets/logo.png'
import NavbarIcons from '../common/NavbarIcons';
import LoginModal from './LoginModal';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-transparent z-50 text-white flex items-center justify-between px-4 py-6">
        {/* Logo */}
        <img src={logo} alt="Restoria" />

        {/* Navbar */}
        <nav>
          <ul className="flex items-center justify-center text-xl tracking-widest font-[urbanist] font-light gap-10">
            <li>
              <NavbarIcons navigate="/" name="Home" />
            </li>
            <li className="flex items-center">
              <NavbarIcons navigate="/" name="Menu" />
              <span>
                <RiArrowDropDownLine />
              </span>
            </li>
            <li>
              <NavbarIcons navigate="/" name="Our Chef" />
            </li>
            <li>
              <NavbarIcons navigate="/" name="About Us" />
            </li>
            <li>
              <NavbarIcons navigate="/" name="Contact" />
            </li>
          </ul>
        </nav>

        {/* Login */}
        <div className="flex items-center justify-center text-[28px] gap-7">
          <Link className="hover:text-[#e6b15f]" to="/">
            <MdOutlineBookmarkAdd />
          </Link>
          <Link
            onClick={() => setIsOpen(true)}
            className="hover:text-[#e6b15f]"
            to="/"
          >
            <FiUser />
          </Link>
          <Link className="hover:text-[#e6b15f]" to="/">
            <MdOutlineSearch />
          </Link>
          <button className="px-4 py-3 bg-[#e6b15f] text-xl text-black">
            Book a Table
          </button>
        </div>
      </div>
      {isOpen && <LoginModal onClose={() => setIsOpen(false)} />}
    </>
  );
}

export default Navbar