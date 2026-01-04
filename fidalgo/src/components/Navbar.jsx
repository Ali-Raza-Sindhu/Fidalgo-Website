import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineBookmarkAdd, MdOutlineSearch  } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import logo from '../assets/logo.png'
import NavbarIcons from '../common/NavbarIcons';
import LoginModal from './LoginModal';
import img1 from '../assets/menu-1-thumb.jpg'
import img2 from '../assets/menu-2-thumb.jpg'
import img3 from '../assets/menu-3-thumb.jpg'
import img4 from '../assets/menu-4-thumb.jpg'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50)
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])

  return (
    <>
      <div className={`fixed top-0 left-0 w-full  z-50 text-white flex items-center justify-between px-4 py-6
        ${scrolled ? 'bg-[#142b27]' : 'bg-transparent'}`}>
        {/* Logo */}
        <img src={logo} alt="Restoria" />

        {/* Navbar */}
        <nav>
          <ul className="flex items-center justify-center text-xl tracking-widest font-[urbanist] font-light gap-10">
            <li>
              <NavbarIcons navigate="/" name="Home" />
            </li>
            <li className="relative group ">
              <div className='flex items-center cursor-pointer'>
                <NavbarIcons navigate="/" name="Menu" />
              <span>
                <RiArrowDropDownLine className='group-hover:rotate-180 group-hover:text-[#e6b15f] transition-all duration-400' />
              </span>

              </div>
              {/* Sub Menu */}
              <div className='fixed top-24 left-0 right-0 
       bg-[#152c29]  opacity-0 invisible translate-y-4
      group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
      transition-all duration-300 ease-out'>
                <ul className='"max-w-6xl mx-auto px-8 py-8 flex justify-between'>
                  <li>
                    <img className='border cursor-pointer hover:border-[#e6b15f] hover:rounded-t-full transition-all duration-300' src={img1} alt="" />
                    <h2 className='text-center mt-4'>Menu List 1</h2>
                  </li>
                  <li>
                    <img className='border cursor-pointer hover:border-[#e6b15f] hover:rounded-t-full transition-all duration-300' src={img2} alt="" />
                    <h2 className='text-center mt-4'>Menu List 2</h2>
                  </li>
                  <li>
                    <img className='border cursor-pointer hover:border-[#e6b15f] hover:rounded-t-full transition-all duration-300' src={img3} alt="" />
                    <h2 className='text-center mt-4'>Menu List 3</h2>
                  </li>
                  <li>
                    <img className='border cursor-pointer hover:border-[#e6b15f] hover:rounded-t-full transition-all duration-300' src={img4} alt="" />
                    <h2 className='text-center mt-4'>Menu List 4</h2>
                  </li>
                </ul>
              </div>
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