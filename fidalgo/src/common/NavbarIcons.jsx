import React from 'react'
import { Link } from 'react-router-dom'

const NavbarIcons = ({navigate, name}) => {
  return (
    <Link to={navigate} className='relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:scale-x-0 after:rounded-full hover:after:scale-x-100 after:origin-center hover:text-[#e6b15f]  after:bg-[#e6b15f] after:transition-all after:duration-300'>
        {name}
    </Link>
  )
}

export default NavbarIcons