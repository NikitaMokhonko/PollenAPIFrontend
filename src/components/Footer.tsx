import React from "react";

export const Footer: React.FC = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url('public/images/footer-background.svg')",
        }}
        className=" pt-10 pb-8 flex justify-center align-center items-center text-white border-t-2 border-white bg-green-900"
      >
        <p className="p-4 pr-5 pl-5 border-white border-2 rounded-2xl bg-blue-400">
          © 2025 Nikita Mokhonko
        </p>
        <a
          href="https://github.com/NikitaMokhonko"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-10 ml-4 mr-4 h-10 border-white border-2 rounded-4xl"
            src="public/images/github-logo.png"
          ></img>
        </a>
        <a
          href="https://www.instagram.com/nikitamokhonko/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-10 h-10 border-white border-2 rounded-4xl"
            src="public/images/instagram-logo.png"
          ></img>
        </a>
      </div>
    </>
  );
};
