import React from "react";


const Footer: React.FC = React.memo(() => {
  return (
    <footer className="px-10 lg:px-40 pt-20 lg:py-16">
      <div className="w-full border-b border-cyan-400 my-2"></div>
      <div className="flex text-xs justify-center">
        All rights reserved © 2024 Muhammed Althaf
      </div>
    </footer>
  );
})

export default Footer;