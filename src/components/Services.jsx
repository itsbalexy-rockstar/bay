import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 my-20 mx-14">
      <motion.div
        className='card relative w-[250px] h-[350px] bg-[url("assets/design.svg")] bg-no-repeat bg-center bg-contain rounded-xl overflow-hidden shadow m-4'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="absolute left-0 bottom-0 w-full p-5 bg-bluedark card-content">
          <h3 className="text-white font-bold text-xl">Frontend</h3>
          <p className="card-description text-sm text-pinky my-2 transition-all">
            Hacemos realidad tus metas, poniendo como prioridad tus necesidades.
          </p>
        </div>
      </motion.div>
      <motion.div
        className='card relative w-[250px] h-[350px] bg-[url("assets/design.svg")] bg-no-repeat bg-center bg-contain rounded-xl overflow-hidden shadow m-4'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="absolute left-0 bottom-0 w-full p-5 bg-bluedark card-content">
          <h3 className="text-white font-bold text-xl">Design</h3>
          <p className="card-description text-sm text-pinky my-2 transition-all">
            Usamos tecnologías vanguardistas para brindar la mejor experiencia
            visual al usuario.
          </p>
        </div>
      </motion.div>
      <motion.div
        className='card relative w-[250px] h-[350px] bg-[url("assets/backend.svg")] bg-no-repeat bg-center bg-contain rounded-xl overflow-hidden shadow m-4'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="absolute left-0 bottom-0 w-full p-5 bg-bluedark card-content">
          <h3 className="text-white font-bold text-xl">Backend</h3>
          <p className="card-description text-sm text-pinky my-2 transition-all">
            Algunos sistemas requieren guardar información muy importante en
            servidores, es por ello que usamos las mejores tecnologías.
          </p>
        </div>
      </motion.div>
      <motion.div
        className='card relative w-[250px] h-[350px] bg-[url("assets/webpages.svg")] bg-no-repeat bg-center bg-contain rounded-xl overflow-hidden shadow m-4'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="absolute left-0 bottom-0 w-full p-5 bg-bluedark card-content">
          <h3 className="text-white font-bold text-xl">Web Pages</h3>
          <p className="card-description text-sm text-pinky my-2 transition-all">
            Diseñamos tu página web a tu medida para el posicionamiento de tu
            negocio.
          </p>
        </div>
      </motion.div>
      <motion.div
        className='card relative w-[250px] h-[350px] bg-[url("assets/hosting.svg")] bg-no-repeat bg-center bg-contain rounded-xl overflow-hidden shadow m-4'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="absolute left-0 bottom-0 w-full p-5 bg-bluedark card-content">
          <h3 className="text-white font-bold text-xl">Hosting</h3>
          <p className="card-description text-sm text-pinky my-2 transition-all">
            Te acompañamos durante el desplegue de tu página web en los mejores
            hosting y dominios personalizados.
          </p>
        </div>
      </motion.div>
      <motion.div
        className='card relative w-[250px] h-[350px] bg-[url("assets/marketing.svg")] bg-no-repeat bg-center bg-contain rounded-xl overflow-hidden shadow m-4'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="absolute left-0 bottom-0 w-full p-5 bg-bluedark card-content">
          <h3 className="text-white font-bold text-xl">Marketing digital</h3>
          <p className="card-description text-sm text-pinky my-2 transition-all">
            Campañas de marketing y posicionamiento SEO para tu negocio
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
