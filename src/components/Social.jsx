import React from "react";
import LinkedinImage from "../assets/linkedin.svg";
import GithubImage from "../assets/github.svg";
import WppImage from "../assets/wpp.svg";

const Social = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="hidden md:flex font-bold text-bluedark my-4 w-[70%] text-center">
        Las redes sociales se han convertido en la portada de un libro personal,
        conoce más de mí acá abajo.
      </p>
      <div className="flex justify-center items-center shadow-md shadow-bluesea mx-10 md:mx-40 rounded-3xl p-2">
        <a href="https://github.com/itsbalexy-rockstar">
          <img src={GithubImage} alt="" className="w-6 md:w-8 mx-4 md:mx-8" />
        </a>
        <a href="https://www.linkedin.com/in/brayan-yepesc/">
          <img src={LinkedinImage} alt="" className="w-6 md:w-8 mx-4 md:mx-8" />
        </a>
        <a href="https://api.whatsapp.com/send/?phone=573145830727&text=Hola,%20me%20gustar%C3%ADa%20contactar%20con%20Bay&type=phone_number&app_absent=0">
          <img src={WppImage} alt="" className="w-6 md:w-8 mx-4 md:mx-8" />
        </a>
      </div>
    </div>
  );
};

export default Social;
