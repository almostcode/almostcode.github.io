import React from "react";

function CTA() {
  return (
    <div className="pt-10 relative w-[100%] md:pt-20 lg:pt-40">
      <div className="pt-14 pb-36">
        <h2 className="text-4xl md:text-5xl font-bold mb-20">
          Interesado en trabajar juntos?
        </h2>
        <a
          href="mailto:contact@braydentw.io"
          className="cursor-pointer font-bold whitespace-nowrap 
        mt-6 px-8 py-3 text-white border-2 rounded-full border-white bg-bg hover:bg-fun-pink hover:border-fun-pink transition-colors"
        >
          Contactanos
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
