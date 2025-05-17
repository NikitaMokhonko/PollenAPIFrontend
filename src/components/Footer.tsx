import React from "react";

export const Footer: React.FC = () => {

  return (
    <>
      <div
        style={{
          backgroundImage: "url('public/images/footer-background.svg')",
        }}
        className=" p-5 flex justify-center align-center items-center text-white border-t-2 border-white bg-green-900"
      >
        <p className="p-5 border-white border-2 rounded-2xl bg-blue-400">© 2025 Nikita Mokhonko</p>
      </div>
    </>
  );
};
