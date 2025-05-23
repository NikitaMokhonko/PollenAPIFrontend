import React from "react";

export const Footer: React.FC = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url('images/footer-background.svg')",
        }}
        className=" pt-10 pb-8 flex justify-center align-center items-center text-white border-t-2 border-blue-700 bg-green-900"
      >
        <p className="p-3 pl-2 border-white border-2 rounded-4xl bg-blue-500">
          © 2025 Nikita Mokhonko
        </p>
        <a
          href="https://github.com/NikitaMokhonko"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-12 ml-3 mr-3 h-12 border-white border-2 rounded-4xl"
            src="images/github-logo.png"
          ></img>
        </a>
        <a
          href="https://www.instagram.com/nikitamokhonko/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-12 h-12 border-white border-2 rounded-4xl"
            src="images/instagram-logo.png"
          ></img>
        </a>
      </div>
    </>
  );
};
