import React from "react";

const Experience = () => {
  return (
    <div className="bg-bluesea p-2 mt-12">
      <h1 className="text-center text-white mt-4 text-xl font-bold">
        ¿Quieres contactar conmigo?
      </h1>
      <p className="text-center text-white font-bold text-sm md:text-lg py-2">
        Ayúdame a <span className="text-pinky">conectar</span> con el mundo,
        deja tú solicitud acá abajo, en{" "}
        <span className="text-pinky">breve</span> me comunicaré contigo
      </p>
      <p className="text-center md:hidden text-white font-bold mb-4 text-sm md:text-lg"><span className="text-pinky">+2</span> años de experiencia y <span className="text-pinky">+10</span> proyectos realizados</p>
    </div>
  );
};

export default Experience;
