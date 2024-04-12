import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import "../../src/assets/css/customStyles.css";

function Portfolio(props) {
  const openLink = (url) => {
    window.open(url, "_blank");
  };
  const proyectInpar = props.data.projects.filter(
    (_, index) => index % 2 === 0
  );
  const proyectPar = props.data.projects.filter((_, index) => index % 2 !== 0);
  console.log(proyectPar, proyectInpar);
  return (
    <section id="work" className="section sectionPortfolio">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10 mt-50">
          <motion.div
            // variants={fadeIn("right", 0.3)}
            // initial="hidden"
            // whileInView={"show"}
            // viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div className="portfolioTitle">
              <h2 className=" h2 leading-tight text-accent">
                {props.data.title}
                <br />
              </h2>
              <p className="max-w-sm mb-16">{props.data.content}</p>
            </div>
            {/* Map to data divisible */}
            {proyectPar.map((result) => {
              return (
                <div
                  // style={{height:'338px'}}
                  onClick={() => openLink(result.link)}
                  className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
                >
                  <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                  {result.img && (
                    <img
                      className="group-hover:scale-125 transition-all duration-500"
                      src={require(`../assets/${result.img}`)}
                      alt=""
                    />
                  )}
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                    <span className="text-gradient">{result.title}</span>
                  </div>
                  <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                    {result.properties.map((prop) => {
                      return (
                        <span className="text-3x1 text-white">
                          {prop}&nbsp;
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </motion.div>

          <motion.div
            // variants={fadeIn("left", 0.2)}
            // initial="hidden"
            // whileInView={"show"}
            // viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            {/* Map to data not divisible */}
            {proyectInpar.map((result) => {
              console.log(result.img);
              return (
                <div
                  // style={{height:'338px'}}
                  onClick={() => openLink(result.link)}
                  className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
                >
                  <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                  {result.img && (
                    <img
                      className="group-hover:scale-125 transition-all duration-500"
                      src={require(`../assets/${result.img}`)}
                      alt=""
                    />
                  )}
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                    <span className="text-gradient">{result.title}</span>
                  </div>
                  <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                    {result.properties.map((prop) => {
                      return (
                        <span className="text-3x1 text-white">
                          {prop}&nbsp;
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
