import React from "react";
import { useNavigate } from "@tanstack/react-router";

export const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center items-center mb-10 h-[80px] border-t-2 border-white">
        © 2025 Nikita Mokhonko
      </div>
    </>
  );
};
