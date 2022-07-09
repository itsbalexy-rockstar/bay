import React from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const Navbar = () => {
  const onClick = (e) => {
    e.preventDefault()
    Swal.fire({
      title: "Gracias por tú interés",
      text: "En este momento, estamos en renovación, agradecemos tu paciencia, pronto podrás conocer más de nosotros",
      icon: "info",
      confirmButtonText: "¡Excelente!",
      iconColor: '#1363DF',
      background: '#eeeeee',
      confirmButtonColor: '#1363DF'
    })
  }
  return (
    <nav className="flex justify-between p-6">
      <div className="p-2">
        <h1 className="font-bold text-3xl text-bluedark">Bay</h1>
      </div>
      <div className="hidden md:flex">
        <ul className="flex p-2 mx-8">
          <li className="mx-3 text-lg" onClick={onClick}>
            <a href="" className="hoverline hover:font-bold">
              Sobre mí
            </a>
          </li>
          <li className="mx-3 text-lg" onClick={onClick}>
            <a href="" className="hoverline hover:font-bold">
              Servicios
            </a>
          </li>
          <li className="mx-3 text-lg" onClick={onClick}>
            <a href="" className="hoverline hover:font-bold">
              Experiencia
            </a>
          </li>
          <li className="mx-3 text-lg flex flex-col relative" onClick={onClick}>
            <span className="text-[10px] absolute top-[-15px] text-pinky">Proximamente</span>
            <a href="" className="hoverline hover:font-bold">
              Proyectos
            </a>
          </li>
        </ul>
        <div className="flex justify-center items-center">
          <motion.button
            className="rounded-3xl text-lg py-2 px-4 mx-4 bg-bluesea text-white font-bold"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="https://api.whatsapp.com/send/?phone=573145830727&text=Hola,%20me%20gustar%C3%ADa%20contactar%20con%20Bay&type=phone_number&app_absent=0" className="text-white">Contacto</a>
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
