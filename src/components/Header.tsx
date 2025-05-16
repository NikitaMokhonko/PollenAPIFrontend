import React from "react";
import { useNavigate } from "@tanstack/react-router";

export const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav
      className={`
      fixed flex justify-between w-full h-[100px] py-2 bg-green-700 border-b-2 border-black
      `}
    >
      <button
        className="hover:cursor-pointer"
        onClick={() => navigate({ to: "/about" })}
      >
        About
      </button>
    </nav>
  );
};
