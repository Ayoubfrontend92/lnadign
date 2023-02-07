import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import {BsArrowUpRight} from 'react-icons/bs'



const service = [
  {
    name: 'UI/UX Design',
    discription :'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam amet accusantium excepturi cum laboriosam atque.',
    link:'Learn more',
  },
  {
    name: 'Development',
    discription :'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam amet accusantium excepturi cum laboriosam atque.',
    link:'Learn more',
  },
  {
    name: 'Photography',
    discription :'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam amet accusantium excepturi cum laboriosam atque.',
    link:'Learn more',
  },
  {
    name: 'Product Branding',
    discription :'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam amet accusantium excepturi cum laboriosam atque.',
    link:'Learn more',
  },
]


const Services = () => {
  return <section  className='section' id='services'>
    <div className='container mx-auto'>
       <div className='flex flex-col lg:flex-row'>
         <motion.div variants={fadeIn('left',0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-accent'>What I do .</h2>
          <h3 className='h3 max-w-[455px] mb-16 '>I'm Ayoub Rezaei, i'm a Front-end developer with more than +3 years of experience developing.</h3>
          <button className='btn btn-sm'>See my work.</button>
         </motion.div>
         <motion.div className='flex-1' variants={fadeIn('right',0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}}>

          <div>
              {service.map((service,index)=>{
                const {name,discription,link}=service
                return (
                  <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] font-primary tracking-wider font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{discription}</p>
                    </div>
                    <div className='flex flex-col flex-1 ml-1 items-end'>
                      <a className='btn h-9 w-9 mb-[42px] flex justify-center items-center' href="#">
                        <BsArrowUpRight/>
                      </a>
                      <a className='text-gradient text-sm' href="#" >{link}</a>
                    </div>
                  </div>
                )
              })}
          </div>

         </motion.div>
       </div>
    </div>
  </section>;
};

export default Services;
