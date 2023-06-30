import React from 'react';

const Details = () => {
  return (
    <div className="flex flex-row justify-center items-center bg-[url(/bg-hair.svg)] object-contain bg-no-repeat">
      <div className="py-20 w-1/2 justify-evenly">
        <p className="text-white text-[30px] font-bold my-10 max-md:text-[18px]">
          DOM RAFAEL, A Barbearia em Luziânia que Faz do seu Estilo uma Arte:
          Qualidade Premium, Tendências Atuais e Serviços Personalizados!
        </p>
        <p className="text-[#B6A57B] text-[18px] max-md:text-[15px] w-10/12">
          Descubra a verdadeira excelência em cuidados masculinos. Na nossa
          barbearia em Luziânia. Oferecemos um ambiente sofisticado e acolhedor,
          onde você pode relaxar enquanto recebe um atendimento personalizado.
          Aprecie a atmosfera única de um local que une tradição e inovação,
          elevando o seu estilo a um novo patamar de perfeição.
        </p>
      </div>
      <img src="star.png" className="w-1/6 object-contain max-md:w-1/3" />
    </div>
  );
};

export default Details;
