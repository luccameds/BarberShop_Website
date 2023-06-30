import { imagesSocialMedia } from '@/constants';
import React from 'react';

const Footer = () => {
  return (
    <div className="flex justify-center py-20 bg-[#1e1e1e] flex-row max-md:flex-col items-center text-[#B6A57B]">
      <div className="w-1/5 py-5">
        <img src="/logo.png" alt="logo" className="object-contain w-[120px]" />
      </div>
      <div className="w-1/5 font-light py-5 max-md:w-1/2">
        <p className="font-semibold text-lg">Endereço</p>
        <p>Av. Juscelino Kubitscheck</p>
        <p>110-184 </p>
        <p>São Caetano, Luziânia - GO</p>
        <p>72805-380</p>
      </div>
      <div className="w-1/5 font-light py-5 max-md:w-1/2">
        <p className="font-semibold text-lg">Redes Sociais</p>
        <div className="flex flex-row py-5 items-center">
          {imagesSocialMedia.map((item) => {
            return (
              <a href={item.linkURL} key={item.ID}>
                <img src={item.imgURL} className="w-[35px] mr-5" />
              </a>
            );
          })}
        </div>
      </div>
      <div className="w-1/5 font-light py-5 max-md:w-1/2">
        <p className="font-semibold text-lg">Horário de Atendimento</p>
        <p>Segunda à Sábado</p>
        <p>9:00 às 19:00</p>
      </div>
    </div>
  );
};

export default Footer;
