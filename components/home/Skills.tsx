import React from "react";
import { skills } from "@/data/content/home";

function Skills() {
  return (
    <div className="flex flex-col md:flex-row justify-between relative">
      <h2 className="relative text-3xl w-full text-center md:text-left font-bold md:max-w-lg mb-10 md:mr-10 md:mb-0 md:w-max mr-0 ">
        Tenemos experiencia.
        <br />
        Aqui estan nuestras herramientas para trabajar.
        <img
          className="sqD w-[100px] hidden md:block bottom-[-80px] left-[-50px] lg:bottom-[-50px] lg:left-[-35px] z-[-10] opacity-70"
          src="/static/formsicon/polygon2.svg"        />
        <img
          className="sqD w-[80px] hidden md:block top-[140px] right-0 lg:top-[105px] opacity-80"
          src="/static/formsicon/polygon2.svg"        />
        <img
          className="sqD w-[60px] hidden md:block top-[200px] right-[50px] lg:top-[170px] lg:right-[50px] opacity-30"
          src="/static/formsicon/polygon2.svg"
        />
        <img
          className="sqD w-[50px] hidden md:block top-[-15px] right-[-15px] opacity-70"
          src="/static/formsicon/polygon2.svg"        />
      </h2>
      <div className="relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 items-center place-content-center">
        {skills.map((item, index) => {
          return (
            <div
              title={item.title}
              key={index}
              className="w-10 mx-auto flex items-center flex-col justify-center"
            >
              <img src={item.icon} style={item.style} />
              <p className="text-xs text-fun-gray font-bold mt-3 opacity-80">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
