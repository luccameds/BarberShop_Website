import React from 'react';
import { images } from '@/constants';

const Banners = () => {
  return (
    <div className="flex justify-center items-center py-10 bg-[#1A1A1A] flex-col">
      <p className="text-[#FFCD80] text-[60px] font-bold py-10 max-md:text-[30px]">
        Ambiente
      </p>
      <div className="flex flex-row max-md:flex-col">
        {images.map((item) => {
          return (
            <img
              src={item.imgURL}
              key={item.ID}
              className="w-[300px] px-5 py-5"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Banners;
