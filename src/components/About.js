import React from 'react';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';







const About = () => {
  const [ref,inView]= useInView ({
    threshold:0.5,
  })

  return 
  
   <div className='section' id='about' ref={ref}>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row gap-y-10 items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* image */}
          <motion.div variants={fadeIn('right',0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} className='bg-about flex-1 bg-contain bg-no-repeat h-[640px] mix-blend-lighten '></motion.div>
          {/* text */}
          <motion.div variants={fadeIn('left',0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} className='flex-1'>
            <h2 className='text-accent h2'>About me.</h2>
            <h3 className='h3 mb-4'>I'm Ayoub Rezaei, i'm a Front-end developer with more than +3 years of experience developing.</h3>
            <p className='mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aspernatur consequatur, quisquam veritatis quasi sequi eum porro ipsam ratione libero.</p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div >
                <div className='text-gradient font-tertiary text-[40px] mb-2 '>
                  {inView ?
                <CountUp start={0} end={13}  duration={3}/> : null }
                </div>
                <div className='font-primary text-sm tracking-[2px] '>
                  Years of <br /> Exprince
                </div>
              </div>

              <div >
                <div className='text-gradient font-tertiary text-[40px] mb-2 '>
                  {inView ?
                <CountUp start={0} end={15}  duration={3}/> : null }
                k+
                </div>
                <div className='font-primary text-sm tracking-[2px] '>
                  Projects <br /> Completed
                </div>
              </div>

              <div >
                <div className='text-gradient font-tertiary text-[40px] mb-2 '>
                  {inView ?
                <CountUp start={0} end={20}  duration={3}/> : null }
                k+
                </div>
                <div className='font-primary text-sm tracking-[2px] '>
                  Satisfied <br /> Clients
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Contact me</button>
              <a href="#" className='text-gradient btn-link'>My Portfolio</a>
            </div>
          </motion.div>
        </div>
      </div>
  </div>
  ;
};

export default About;
