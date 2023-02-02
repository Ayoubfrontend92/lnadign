import React from 'react';

import Logo from '../assets/logo.svg'

const Header = () => {
  return <header  className='py-8'>
          <div className='container mx-auto'>
            <div className='flex justify-between items-center'>
              <a href="#">
                <p className='text-3xl text-gradient '>Ayoub <br/> <span className='ml-5 text-white'>Rezaei</span> </p>
              </a>

              <button className='btn font-secondary btn-sm'>Work white me </button>
            </div>
          </div>
        </header>;
};

export default Header;
