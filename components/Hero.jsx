import { imagesSocialMedia } from '@/constants';
import React from 'react';

const Hero = () => {
  return (
    <div className="items-center flex py-20 flex-row">
      <div className="flex flex-col px-20 max-md:hidden absolute">
        {imagesSocialMedia.map((item) => {
          return (
            <a href={item.linkURL} key={item.ID}>
              <img src={item.imgURL} className="py-10" />
            </a>
          );
        })}
      </div>

      <div className="flex flex-col flex-1 justify-center items-center">
        <img
          src="/draw.png"
          alt="hero image"
          className="w-[350px] object-contain"
        />
        <h1 className="w-[600px] text-[30px] justify-center font-light text-[#1A1A1A] py-[30px] text-center max-md:text-[24px] max-md:w-[300px]">
          Qualidade Impecável, Estilo Autêntico e Atendimento Exclusivo!
        </h1>
        <h2 className="w-[600px] text-[15px] text-center font-semibold text-[#B6A57B] max-md:text-[14px] max-md:w-[300px]">
          Corte, barba e cuidados para o homem moderno. Descubra o local
          perfeito para elevar seu visual e sentir-se confiante em cada visita.
          Venha para a barbearia que valoriza sua aparência e sua experiência
        </h2>
        <button className="py-5 px-10 bg-[#F6E5BA] my-[45px] font-bold">
          Entrar em Contato
        </button>
      </div>
    </div>
  );
};

export default Hero;
