import React from 'react';
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll';

const Header = () => {

  return (
  <header className='py-8'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        {/* <a href='#'>
          <img  src={Logo} alt=''/>
        </a> */}
        <a href='#' className='text-gradient btn-link lg:text-[30px]'>
         JHONY VIDAL
        </a>
        <Link className='btn btn-sm justify-center flex items-center'  activeClass='active' smooth={true} spy={true} to='contact'>Work with me</Link>
      </div>
    </div>
  </header>
  );
};

export default Header;
