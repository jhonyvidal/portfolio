import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref,inView] = useInView({
    threshould:0.5,
  })
  const redirect = () => {
    window.open('https://api.whatsapp.com/send?phone=+573135959528', '_blank')
  };
  return (
  <section className='section' id="about" ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* img */}
        <motion.div
        variants={fadeIn('right',0.3)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once:false,amount:0.3}} 
        className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
          
        </motion.div>
        {/* text */}
        <motion.div 
        variants={fadeIn('left',0.3)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once:false,amount:0.3}} 
        className='flex-1'>
          
          <h2 className='h2 text-accent'>About me.</h2>
          <h3 className='h3 mb-4'>i'm a Fullstack Developer with over 6 years of experience</h3>
          <p className='mb-6'>I have created and developed differents applications with long techonologies such as React, Angular, Ioni, React Native, C#, .Net, PHP, Java and Python </p>
          {/* stats */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ? <CountUp start={0}  end={6} duration={3}/>
                  :null
                }
              </div>
              <div className='font-primary text-sm tracking-[2px]'> 
                Years of<br/>
                Experience
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ? <CountUp start={0}  end={5} duration={3}/>
                  :null
                }K+
              </div>
              <div className='font-primary text-sm tracking-[2px]'> 
                Projects<br/>
                Completed
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ? <CountUp start={0}  end={12} duration={3}/>
                  :null
                }K+
              </div>
              <div className='font-primary text-sm tracking-[2px]'> 
                Satisfied<br/>
                Clients
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg ' onClick={redirect}>Contact me</button>
            <a href='#' className='text-gradient btn-link'>
              My Portfolio
            </a>
          </div>
        </motion.div>    
      </div>
    </div>
  </section>
  );
};

export default About;