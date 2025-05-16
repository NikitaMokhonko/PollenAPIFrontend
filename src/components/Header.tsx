import React from "react";
import { useNavigate } from "@tanstack/react-router";

export const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav
      className={`
      fixed flex justify-between items-center w-full h-[100px] py-2 bg-green-900 border-b-2 p-4 border-white
      `}
    >
      <button
        className="hover:cursor-pointer text-white hover:border-2 hover:border-white ml-10 p-5 rounded-md font-serif"
        onClick={() => navigate({ to: "/" })}
      >
        Home
      </button>
      <h1 className="text-center text-white font-serif text-[110%]">
        Birch Pollen Forecast for Stockholm
      </h1>
      <button
        className="hover:cursor-pointer text-white hover:border-2 hover:border-white mr-10 p-5 rounded-md font-serif"
        onClick={() => navigate({ to: "/about" })}
      >
        About
      </button>
    </nav>
  );
};
