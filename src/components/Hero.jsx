import React from "react";
import heroImage from "../assets/hero.svg";
import { motion } from "framer-motion";
import Typical from 'react-typical'

const Hero = () => {
  return (
    <div className="h-[600px] grid grid-cols-1 md:grid-cols-2">
      <div className="flex justify-center items-center">
        <img src={heroImage} alt="" className="w-[70%] md:w-full" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-4xl md:text-6xl text-bluesea my-6 text-center">
          ¡Hola, soy Brayan!
        </h1>
        <p>Soy <Typical loop={Infinity} wrapper='a' steps={['web developer', 1000, 'designer', 1000, 'open sourcer', 1000, 'entrepreneur', 1000]} className="text-pinky"/></p>
        <p className="w-[80%] text-center">
          Un desarrollador proactivo en busca de retos que ayuden a demostrar
          sus habilidades en la web.
        </p>
        <p className="font-bold text-pinky">¿Tienes algún proyecto en mente?</p>
        <motion.button
          className="rounded-3xl text-lg py-2 px-4 bg-bluesea text-white shadow-lg shadow-bluesky hover:font-bold transition-all my-10"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href="https://api.whatsapp.com/send/?phone=573145830727&text=Hola,%20me%20gustar%C3%ADa%20contactar%20con%20Bay&type=phone_number&app_absent=0" className="text-white">¡Hablemos!</a>
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
