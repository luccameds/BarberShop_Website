import React from 'react';

const Header = () => {
  return (
    <div className={'px-10 py-10 flex flex-row justify-between bg-[#F6E5BA]'}>
      <img src="/logo.png" alt="logo" className="w-[60px]" />
      <img src="/menu.png" alt="logo" className="w-[30px] object-contain" />
    </div>
  );
};

export default Header;
