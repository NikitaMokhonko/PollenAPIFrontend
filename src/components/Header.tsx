import React from "react";
import { useNavigate } from "@tanstack/react-router";

export const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav
      style={{ backgroundImage: "url('images/background.svg')" }}
      className={`
      fixed flex justify-between items-center w-full h-[110px] py-2 bg-green-900 border-b-2 p-4 border-white
      `}
    >
      <h3
        style={{ fontFamily: "'Poppins', sans-serif" }}
        className="text-center block md:hidden bg-black font-bold text-white text-[80%] ml-2 pl-5 pr-5 border-2 border-white rounded-2xl w-[180px]"
      >
        Birch Pollen Forecast for Stockholm
      </h3>
      <button
        className="hover:cursor-pointer hidden md:block text-white hover:border-2 hover:border-blue-400 border-white border-2 bg-black ml-20 p-2 rounded-md font-serif"
        onClick={() => navigate({ to: "/" })}
      >
        Home
      </button>
      <button
        className="hover:cursor-pointer md:hidden block text-white hover:border-2 hover:border-blue-400 border-white border-2 bg-black pl-2 pr-2 rounded-md font-serif"
        onClick={() => navigate({ to: "/" })}
      >
        Home
      </button>
      <h1
        style={{ fontFamily: "'Poppins', sans-serif" }}
        className="text-center hidden md:block bg-black font-thin text-white text-[150%] p-2 pl-10 pr-10 border-2 border-white rounded-2xl"
      >
        Birch Pollen Forecast for Stockholm
      </h1>
      <button
        className="hover:cursor-pointer hidden md:block text-white hover:border-2 hover:border-blue-400 border-white border-2 bg-black mr-20 p-2 rounded-md font-serif"
        onClick={() => navigate({ to: "/about" })}
      >
        About
      </button>
      <button
        className="hover:cursor-pointer block md:hidden text-white hover:border-2 hover:border-blue-400 border-white border-2 bg-black pl-2 pr-2 mr-5 rounded-md font-serif"
        onClick={() => navigate({ to: "/about" })}
      >
        About
      </button>
    </nav>
  );
};
