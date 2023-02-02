import React from 'react';

import image from '../assets/avatar.svg'

import {FaLinkedin,FaInstagram,FaGithub} from  'react-icons/fa'

//type animation
import { TypeAnimation } from 'react-type-animation';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

const Banner = () => {
  return <section  className='section' id='home'>

    <div className="container mx-auto">
      <div>
          <div>
            <h1>AYOUB <span>REZAEI</span></h1>
            <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='mr-4 text-white'>I am a</span>
              <TypeAnimation sequence={[
                'Frontend developer',
                2000, 
                'Photographer',
                2000,
                'Human!',
                2000,
              ]}
              speed={50}
              wrapper='span'
              repeat={Infinity}
              className='text-accent'
              />
              <p>
                
              </p>
            </div>
          </div>
          <div>
            <img src={image} alt="banner-img" />
          </div>
      </div>
    </div>

  </section>;
};

export default Banner;
