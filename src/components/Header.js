import React from 'react';
import logo from '../assets/desktop/logo.svg';
import { BsFillSunFill } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const Header = () => {
  const { toggleTheme } = useGlobalContext();
  return (
    <section className='header'>
      <img src={logo} alt='site-logo' />
      <div className='toggle-btn'>
        <span className='header-icon-sun'>
          <BsFillSunFill />
        </span>
        <span>
          <label className='switch'>
            <input type='checkbox' />
            <span className='slider round' onClick={toggleTheme}></span>
          </label>
        </span>
        <span className='header-icon-moon'>
          <FaMoon />
        </span>
      </div>
    </section>
  );
};

export default Header;
