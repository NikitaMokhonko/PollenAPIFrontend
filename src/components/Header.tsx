import React from "react";
import { useNavigate } from "@tanstack/react-router";

export const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav
      className={`
      fixed flex justify-between w-full h-[100px] py-2 bg-green-700 border-b-2 p-4 border-black
      `}
    >
      <button
        className="hover:cursor-pointer text-white hover:border-2 hover:border-white p-5"
        onClick={() => navigate({ to: "/" })}
      >
        Home
      </button>
      <h1 className="text-center text-white">
        Birch Pollen Forecast for Stockholm
      </h1>
      <button
        className="hover:cursor-pointer text-white hover:border-2 hover:border-white p-5"
        onClick={() => navigate({ to: "/about" })}
      >
        About
      </button>
    </nav>
  );
};
