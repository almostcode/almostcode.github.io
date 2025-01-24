import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  return (
    <>
      <div
        className="relative heroElem w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1"
        style={{ maxWidth: "1200px" }}
      >
        <p className="text-xl mb-5">Hola, somos AlmostCode.</p>
        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg">
          Nosotros <span className="heroShiny1 text-[#4de1c1]">creamos</span> y{" "}
          <span className="heroShiny2 text-[#4de1c1]">diseñamos</span> proyectos para la web.
          <img
            className="sqD w-[100px]  sm:top-[-130px] sm:left-[15%] lg:top-[-130px] lg:left-[120px] opacity-80"
            style={{ animationDelay: "0.7s" }}
            src="/static/formsicon/polygon2.svg"
          />
          <img
            className="sqD w-[70px] squiggle-hero-html top-[-90px] right-[5%] sm:top-[-90px] sm:right-[170px] opacity-80 hidden lg:block"
            style={{ animationDelay: "0.1s" }}
            src="/static/formsicon/polygon2.svg"
          />
          <img
            className="sqD w-[120px] top-[120px] right-2 opacity-10"
            style={{ animationDelay: "0.2s" }}
            src="/static/formsicon/polygon2.svg"
          />
          <img
            className="sqD w-[200px]  bottom-[-300px] -right-1/4 sm:right-[-20%] lg:bottom-[-310px] lg:right-[-120px] opacity-30"
            style={{ animationDelay: "0.3s" }}
            src="/static/formsicon/polygon2.svg"
          />
          <img
            className="sqD w-[190px] hidden sm:block bottom-[-340px] left-[-180px] opacity-50"
            style={{ animationDelay: "0.4s" }}
            src="/static/formsicon/polygon2.svg"
          />

                    <img
            className="sqD w-[120px] bottom-[-350px] sm:right-[30%] hidden lg:block"
            style={{ animationDelay: "0.4s" }}
            src="/static/formsicon/polygon2.svg"
          />

          <img
            className="sqD w-[200px] bottom-[-340px] right-[60%] sm:right-[40%] opacity-10"
            style={{ animationDelay: "0.6s" }}
            src="/static/formsicon/polygon2.svg"
          />

          <img
            className="sqD w-[150px] left-[-35px] bottom-[-85px] sm:bottom-[-100px] sm:left-5 opacity-10"
            style={{ animationDelay: "0.9s" }}
            src="/static/formsicon/polygon2.svg"
          />
        </h1>
        <ScrollLink
          activeClass="active"
          to="learnmore"
          spy={true}
          offset={-30}
          smooth={true}
          duration={500}
        >
          <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-fun-white bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors">
            Cuentame mas
          </div>
        </ScrollLink>
      </div>
    </>
  );
}

export default Hero;
