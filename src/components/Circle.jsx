import React from "react";
import reactIcon from "../assets/react.svg";
import vueIcon from "../assets/vue.svg";
import nodeIcon from "../assets/node.svg";
import goIcon from "../assets/go.svg";
import { motion } from "framer-motion";
import { useState } from "react";

const Circle = () => {
  const [clickedReact, setClickedReact] = useState(false);
  const [clickedVue, setClickedVue] = useState(false);
  const [clickedGo, setClickedGo] = useState(false);
  const [clickedNode, setClickedNode] = useState(false);
  return (
    <div className="w-full h-[500px] bg-[#eeeeee66] mt-10 flex flex-col justify-center items-center">
      <h1 className="text-pinky font-bold text-2xl my-4">
        Algunas tecnologías que usamos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center">
        <div className="hidden shadow-md shadow-pinky bg-bluesky rounded-2xl md:flex justify-center items-center relative left-4 -z-10 text-white font-bold p-2">
          <span className="text-pinky mx-2">+2</span> años de experiencia
        </div>
        <div className="w-[300px] h-[300px] bg-bluesea rounded-full relative border-4 border-bluesky">
          <motion.div
            className="absolute rounded-full w-[100px] h-[100px] bg-bluesky top-0 left-0 flex flex-col justify-center items-center cursor-pointer"
            animate={{
              x: clickedReact ? 99 : 0,
              y: clickedReact ? 99 : 0,
              scale: clickedReact ? 2 : 1,
            }}
            onClick={() => {
              setClickedReact(!clickedReact);
            }}
            transition={{ type: "spring" }}
          >
            <img src={reactIcon} alt="" />
            <p className="font-bold text-bluesea">React</p>
          </motion.div>

          <motion.div
            className="absolute rounded-full w-[100px] h-[100px] bg-bluesky top-0 right-0 flex flex-col justify-center items-center cursor-pointer"
            animate={{
              x: clickedVue ? -99 : 0,
              y: clickedVue ? 99 : 0,
              scale: clickedVue ? 2 : 1,
            }}
            onClick={() => {
              setClickedVue(!clickedVue);
            }}
            transition={{ type: "spring" }}
          >
            <img src={vueIcon} alt="" />
            <p className="font-bold text-bluesea">Vue</p>
          </motion.div>

          <motion.div
            className="absolute rounded-full w-[100px] h-[100px] bg-bluesky bottom-0 right-0 flex flex-col justify-center items-center cursor-pointer"
            animate={{
              x: clickedNode ? -99 : 0,
              y: clickedNode ? -99 : 0,
              scale: clickedNode ? 2 : 1,
            }}
            onClick={() => {
              setClickedNode(!clickedNode);
            }}
            transition={{ type: "spring" }}
          >
            <img src={nodeIcon} alt="" />
            <p className="font-bold text-bluesea">Node</p>
          </motion.div>

          <motion.div
            className="absolute rounded-full w-[100px] h-[100px] bg-bluesky bottom-0 left-0 flex flex-col justify-center items-center cursor-pointer"
            animate={{
              x: clickedGo ? 99 : 0,
              y: clickedGo ? -99 : 0,
              scale: clickedGo ? 2 : 1,
            }}
            onClick={() => {
              setClickedGo(!clickedGo);
            }}
            transition={{ type: "spring" }}
          >
            <img src={goIcon} alt="" />
          </motion.div>
        </div>
        <div className="hidden shadow-md shadow-pinky bg-bluesky rounded-2xl md:flex justify-center items-center relative -z-10 right-4 text-white font-bold p-2">
          <span className="text-pinky mx-2">+10</span> proyectos realizados
        </div>
      </div>
    </div>
  );
};

export default Circle;
