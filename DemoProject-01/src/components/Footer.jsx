import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex justify-center items-center bg-green-300 absolute bottom-0 w-full h-8">
      AlgoDaily © {currentYear}
    </div>
  );
};

export default Footer;

