import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';
import { useNavigate } from "react-router-dom";
import '../i18n/config';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const [ref,inView] = useInView({
    threshould:0.5,
  })
  const navigate = useNavigate();
  const redirect = () => {
    navigate('/educations', { replace: true })
  };
  const redirectToSkills = (event) => {
    event.preventDefault();
    navigate('/skills', { replace: true })
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
          
          <h2 className='h2 text-accent'>{t('about.title')}</h2>
          <h3 className='h3 mb-4'>{t('about.subtitle')}</h3>
          <p className='mb-6'>{t('about.text')} </p>
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
                <p dangerouslySetInnerHTML={{ __html: t('about.item1') }} />
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ? <CountUp start={0}  end={20} duration={3}/>
                  :null
                }+
              </div>
              <div className='font-primary text-sm tracking-[2px]'> 
                <p dangerouslySetInnerHTML={{ __html: t('about.item2') }} />
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ? <CountUp start={0}  end={50} duration={3}/>
                  :null
                }+
              </div>
              <div className='font-primary text-sm tracking-[2px]'> 
                <p dangerouslySetInnerHTML={{ __html: t('about.item3') }} />
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg ' onClick={redirect}>{t('myeducations')}</button>
            <a onClick={redirectToSkills} className='text-gradient btn-link'  href='#'>
            {t('myskills')} 
            </a>
          </div>
        </motion.div>    
      </div>
    </div>
  </section>
  );
};

export default About;
