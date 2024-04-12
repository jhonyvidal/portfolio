import React from 'react';
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  }

  return (
  <header className='py-8'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        {/* <a href='#'>
          <img  src={Logo} alt=''/>
        </a> */}
        <a href='/' className='text-gradient btn-link lg:text-[30px]'>
         JHONY VIDAL
        </a>
       
        <div className='flex justify-end items-center'>
          <select onChange={changeLanguage} className='btn btn-sm justify-center flex items-center' style={{marginRight:'10px'}}>
            <option value="en" defaultChecked style={{background:"gray"}}>English</option>
            <option value="es" style={{background:"gray"}}>Español</option>
          </select>
          <Link className='btn btn-sm justify-center flex items-center'  activeClass='active' smooth={true} spy={true} to='contact'>Work with me</Link>
        </div>
      </div>
     
    </div>
  </header>
  );
};

export default Header;
