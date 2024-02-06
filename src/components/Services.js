import React from 'react';
import { useNavigate } from "react-router-dom";
import { BsArrowUpRight } from 'react-icons/bs'
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import dateCalculate from '../helpers/DateCalculate';


const Services = () => {

  const navigate = useNavigate();
  function redirect(){
    navigate('/portfolio', { replace: true })
  } 

  const services =[
    {
      name:"UI/UX Design",
      description:"design web pages, market, landing pages, business pages, portfolio, front end services ",
      link:"Learn more",
      years:dateCalculate('01/01/2020')
    },
    {
      name:"Frontend Service",
      description:"Create complete software with React, Angular and Vue platforms",
      link:"Learn more",
      years:dateCalculate('01/01/2018')
    },
    {
      name:"Backend Service",
      description:"Create Apis, Web services, Integrations, Middlewares, Security services with php, Node.js, .Net and C#",
      link:"Learn more",
      years:dateCalculate('01/01/2017')
    },
    {
      name:"Mobile Service",
      description:"Create Apps with Android Studio, Ionic or React Native",
      link:"Learn more",
      years:dateCalculate('01/01/2020')
    }
  ]

  // React.useEffect(() => {
  //   console.log(dateCalculate('01/01/2020'));  
  // }, []);

  return (
    <section id="services" className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row '>
          <motion.div 
           variants={fadeIn('right',0.3)}
           initial="hidden"
           whileInView={'show'}
           viewport={{once:false,amount:0.3}} 
           className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-bled-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text.accent mb-6'> What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              I'm a developer with long experience in fullstack services.
            </h3>
            <button className='btn btn-sm' onClick={redirect}>See my work</button>
          </motion.div>

          <motion.div 
           variants={fadeIn('left',0.5)}
           initial="hidden"
           whileInView={'show'}
           viewport={{once:false,amount:0.3}} 
           className='flex-1'>
            <div>
              {
                services.map((service, index) =>{
                  const { name ,description, link, years} = service;
                  return(
                    <div className='border-b border-white/20 h-[110px] mb-[38px] flex' key={index}>
                      <div className='max-w-[476px]'>
                        <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name} with {years} years.</h4>
                        <p className='font-secondary leading-tight'>{description}</p>
                      </div>
                      <div className='flex flex-col flex-1 items-end'>
                        <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                          <BsArrowUpRight/>
                        </a>
                        <a href='#' className='text-gradient text-sm'>{link}</a>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Services;
