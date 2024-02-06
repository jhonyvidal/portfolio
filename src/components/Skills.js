import React from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import dateCalculate from "../helpers/DateCalculate";

const Skills = () => {
  const navigate = useNavigate();
  function redirect() {
    navigate("/portfolio", { replace: true });
  }

  const services = [
    {
      name: "Frontend Frameworks",
      descriptions: [
        { description: "React.js", years:dateCalculate('01/01/2018') },
        { description: "Angular.js", years:dateCalculate('01/01/2019') },
        { description: "Vue.js", years:dateCalculate('01/01/2022') },
        { description: "Next.js", years:dateCalculate('01/01/2020') },
      ],
    },
    {
      name: "Backend Frameworks",
      descriptions: [
        { description: "ASP .Net", years:dateCalculate('01/01/2018') },
        { description: "Entity Framework Core", years:dateCalculate('01/01/2019') },
        { description: "Laravel", years:dateCalculate('01/01/2020') },
      ],
    },
    {
      name: "Mobile Frameworks",
      descriptions: [
        { description: "Ionic", years:dateCalculate('01/01/2019') },
        { description: "React Native", years:dateCalculate('01/01/2020') },
      ],
    },
    {
      name: "Skill Codes",
      descriptions: [
        { description: "Javascript", years:dateCalculate('01/01/2019') },
        { description: "PHP", years:dateCalculate('01/01/2020') },
        { description: "Typescript", years:dateCalculate('01/01/2020') },
        { description: "C#", years:dateCalculate('01/01/2018') },
        { description: "Java", years:dateCalculate('01/01/2021') },
        { description: "Python", years:dateCalculate('01/01/2021') },
      ],
    },
    {
      name: "Libraries",
      descriptions: [
        { description: "Redux", years:dateCalculate('01/01/2019') },
        { description: "Redux Toolkit", years:dateCalculate('01/01/2020') },
        { description: "React Router Dom", years:dateCalculate('01/01/2020') },
        { description: "Tailwind", years:dateCalculate('01/01/2018') },
        { description: "Boostrap", years:dateCalculate('01/01/2018') },
      ],
    },
    {
      name: "CMS",
      descriptions: [
        { description: "Wordpress", years:dateCalculate('01/01/2019') },
        { description: "Shopify", years:dateCalculate('01/01/2020') },
      ],
    },
  ];

  // React.useEffect(() => {
  //   console.log(dateCalculate('01/01/2020'));
  // }, []);

  return (
    <section id="services" className="section" style={{height: 'auto'}}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-bottom bg-no-repeat mix-bled-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text.accent mb-6"> My skills</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              As a skilled professional in the field of Software.
            </h3>
            <button className="btn btn-sm" onClick={redirect}>
              See my work
            </button>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, descriptions, link, years } = service;
                return (
                  <div
                    className="border-b border-white/20  mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      {descriptions.map((service, index) => {
                        return (
                          <p
                            className="font-secondary leading-tight"
                            index={index}
                          >
                            {service.description}
                          </p>
                        );
                      })}
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[20px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      {descriptions.map((service, index) => {
                        return (
                          <a href="#" className="text-gradient text-sm">
                             {service.years} Years
                          </a>
                        )
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
