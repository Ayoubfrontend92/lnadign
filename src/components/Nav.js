import React from 'react';

//icons
import {BiHomeAlt,BiUser} from 'react-icons/bi'
import {BsClipboardData,BsBriefcase,BsChatSquareText} from 'react-icons/bs'

//link-scroll
import {Link} from 'react-scroll'



const Nav = () => {
  return (
         <nav className='fixed w-full overflow-hidden bottom-2 lg:bottom-8 z-50'>
            <div className='container mx-auto'>
              <div className='bg-black/20 text-white/50 flex w-full h-[96px] max-w-[460px] mx-auto rounded-full justify-between items-center px-5 text-2xl backdrop-blur-2xl'>

                <Link to='home' offset={-200} activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] justify-center items-center flex'>
                <BiHomeAlt/>
                </Link>

                <Link to='about' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] justify-center items-center flex'>
                <BiUser/>
                </Link>

                <Link to='services' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] justify-center items-center flex'>
                <BsClipboardData/>
                </Link>

                <Link to='work' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] justify-center items-center flex'>
                <BsBriefcase/>
                </Link>

                <Link to='contact' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] justify-center items-center flex'>
                <BsChatSquareText/>
                </Link>


              </div>
            </div>
         </nav>
  )
};

export default Nav;
