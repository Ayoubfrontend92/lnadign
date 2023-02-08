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
  return 
(
  <section  className='flex items-center min-h-[85vh] lg:min-h-[78vh]  ' id='home'>

    <div className="container mx-auto">
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center lg:text-left font-secondary'>
            <motion.h1 variants={fadeIn('up',0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>AYOUB <span>REZAEI</span></motion.h1>
            <motion.div 
            variants={fadeIn('up',0.5)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}}
            className=' text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='mr-4 text-white'>I am a</span>
              <TypeAnimation sequence={[
                'developer',
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
           
            </motion.div>
            <motion.p 
            variants={fadeIn('up',0.6)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}}
            className=' max-w-lg mt-7 lg:mx-0 '>
              I'm Ayoub Rezaei, i'm a Front-end developer with more than +3 years of experience developing.
              </motion.p>
              <motion.div
              variants={fadeIn('up',0.6)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}}
              className='flex mt-7 max-w-max p-0 gap-x-6 items-center mx-auto lg:mx-0'>
                <button className='btn btn-lg'  >Contact me</button>
                <a href="#" className='text-gradient btn-link'>My Portfolio</a>
              </motion.div>
              <motion.div 
              variants={fadeIn('up',0.7)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}}
              className=' flex tex-[20px] mt-10 gap-x-6 max-w-max mx-auto lg:mx-0 '>
                <a href="#">
                  <FaLinkedin/>
                </a>
                <a href="#">
                  <FaGithub/>
                </a>
                <a href="#">
                  <FaInstagram/>
                </a>
              </motion.div>
          </div>
          <motion.div 
          variants={fadeIn('down',0.5)} initial="hidden" whileInView={'show'}
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={image} alt="banner-img" />
          </motion.div>
      </div>
    </div>

  </section>
)
  ;
};

export default Banner;
