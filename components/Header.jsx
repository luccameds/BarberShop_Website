import React from 'react';
import { imagesSocialMedia } from '@/constants';

const Header = () => {
  return (
    <div className={`px-10 py-5 flex flex-row justify-between bg-[#1e1e1e]`}>
      <img src="/logo.png" alt="logo" className="w-[75px]" />
      <div className="flex flex-row font-semibold justify-evenly items-center w-1/3 max-lg:hidden text-white">
        <p>Início</p>
        <p>Galeria</p>
        <p>Serviços</p>
        <p>Sobre Nós</p>
      </div>
      <a
        href={imagesSocialMedia[2].linkURL}
        className="bg-[#F6E5BA] px-5 font-semibold justify-center flex items-center"
      >
        Entrar em Contato
      </a>
    </div>
  );
};

export default Header;
