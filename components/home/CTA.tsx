import React from "react";

function CTA() {
  return (
    <div className="pt-10 relative w-[100%] md:pt-20 lg:pt-40">
      <div className="pt-14 pb-36">
        <h2 className="text-4xl md:text-5xl font-bold mb-20">
          Interesado en trabajar juntos? <br /> 
          <br />Contáctanos
        </h2>
        <a
          href="mailto:davehcanache@gmail.com"
          className="cursor-pointer font-bold whitespace-nowrap 
        mt-6 px-8 py-3 mx-6 text-white border-2 rounded-full border-white bg-bg hover:bg-fun-pink hover:border-fun-pink transition-colors"
        >
          Correo
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B584125459537&text&type=phone_number&app_absent=0"
          className="cursor-pointer font-bold whitespace-nowrap 
        mt-6 px-8 py-3 text-white border-2 rounded-full border-white bg-bg hover:bg-fun-pink hover:border-fun-pink transition-colors"
        >
          Whatsapp
        </a>
      </div>

      <img
        className="sqD w-full bottom-[0px] object-cover opacity-10 "
        style={{ zIndex: "-50" }}
        src="/static/formsicon/Map.svg"
      />
    </div>
  );
}

export default CTA;
