import React from 'react';
import '../Style/Banner.css';

const Banner = () =>{

  return (
    <>
      <div className="main">
        <div className="d1"></div>
        <div className="d2"></div>
        <div className="d3">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Stile che definisce
              </h1>
              <p className="mt-4 text-xl text-white">
                Descubre las últimas tendencias y viste con confianza. La moda está al alcance de tu mano.
              </p>
            </div>
        </div>
        <div className="d4"></div>
      </div>  
    </> 
  );
};

export default Banner;
