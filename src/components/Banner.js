import React from 'react';
import Image from '../assets/avatar.png'
import { FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation} from 'react-type-animation'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import '../i18n/config';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t } = useTranslation();
  console.log("Aqui llegue yo todo esta ok");
  const redirect = () => {
    window.open('https://api.whatsapp.com/send?phone=+573135959528', '_blank')
  };

  return (
      <section id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
        <div className='container mx-auto'>
          <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
            <div className='flex-1 text-center font-seconday lg:text-left'>
              <motion.h1 variants={fadeIn('up',0.3)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
                JHONY <span>VIDAL</span>
              </motion.h1>
              <motion.div  variants={fadeIn('up',0.4)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className=' text-[30px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
                <span className='text-white mr-4'>{t('banner.title')}</span>
              </motion.div>
             <motion.div  variants={fadeIn('up',0.4)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className='mb-6 text-[30px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <TypeAnimation sequence={[
                'Engineer',
                200,
                'Developer',
                2000,
                'Analyst',
                2000,
                'Architect',
                200
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
              />
             </motion.div>
             {/* <motion.p variants={fadeIn('up',0.5)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className='mb-8 max-w-lg mx-auto lg:mx-0'>{t('banner.mypassion')}</motion.p>  */}
             <motion.div variants={fadeIn('up',0.6)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className='flex max-w-max gap-x-6 items-center mb-5 mx.auto lg:mx-0'>
              <button className='btn btn-lg' onClick={redirect}>{t('contactme')}</button>
              <a href='/portfolio' className='text-gradient btn-link'>
                {t('myportfolio')}
              </a>
             </motion.div>
             <motion.div  variants={fadeIn('up',0.7)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                <a href='https://debugploy.com/' target='_blank'>
                  <FaYoutube/>
                </a>
                <a href='https://github.com/jhonyvidal' target='_blank'>
                  <FaGithub/>
                </a>
                <a href='https://www.linkedin.com/in/jhony-german-vidal-lopez-466a7016b/' target='_blank'>
                  <FaLinkedin/>
                </a>
             </motion.div>
            </div>
            <motion.div  variants={fadeIn('down',0.5)} initial="hidden" whileInView={'show'} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
              <img src={Image} alt=''></img>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default Banner;
