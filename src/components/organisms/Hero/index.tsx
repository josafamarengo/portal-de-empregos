import Image from 'next/image';
import React from 'react';

import HeroImage from '@/assets/img/hiring-chair.png';

function Hero() {
  return (
      <div className="w-screen h-[calc(100vh-3.5rem)] xl:h-[calc(100vh-19rem)]  bg-gradient-to-r from-[#446391] to-[#537dbb]">
          <div className="w-full h-full max-w-6xl mx-auto flex flex-col items-center xl:grid grid-cols-2 px-4 xl:px-0">
              <div className="h-48 xl:h-full text-4xl flex flex-col justify-center items-center xl:items-start">
                  <h2 className="text-[clamp(2rem,5vw,3.75rem)] text-white text-center xl:text-left">
                      Existe uma vaga esperando por você
                  </h2>
              </div>
              <div className="h-full flex flex-col justify-center items-center">
                  <Image
                      src={HeroImage}
                      alt="Ilustração 3D de uma cadeira de escritório com uma placa escrito 'VACANT'"
                      width={400}
                      height={400}
                      className="translate-x-10 xl:translate-x-0 w-[300px] xl:w-[400px]"
                  />
              </div>
          </div>
      </div>
  );
}

export default Hero