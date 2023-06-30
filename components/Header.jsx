import React from 'react';

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
      <button className="bg-[#F6E5BA] py-5 px-5 font-semibold">
        Entrar em Contato
      </button>
    </div>
  );
};

export default Header;
