import React from "react";
import { motion } from "framer-motion";
import useForm from "../hooks/useForm";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const [values, handleInputChange, reset] = useForm({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = values;
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "mygmailaccount",
        "template_pptjm9s",
        e.target,
        "vT5tuX2sdGdv1qCpx"
      )
      .then(() => {
        Swal.fire({
          title: "Mensaje enviado correctamente!",
          text: "En breve me pondré en contacto con usted",
          icon: "success",
          confirmButtonText: "Genial!",
          iconColor: '#1363DF',
          background: '#eeeeee',
          confirmButtonColor: '#1363DF'
        });
      });
      reset()
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-bluedark mx-3 md:mx-20 my-8 rounded-2xl items-center justify-center p-4">
      <h1 className="text-lg md:text-2xl text-white mx-4 md:mx-10 mb-4 md:mb-0">
        Ya llegaste a este punto, es hora de ponernos en contacto.{" "}
        <span className="text-pinky">
          ¡Empecemos a crear eso que tanto has soñado!
        </span>
      </h1>
      <form
        action=""
        className="flex flex-col justify-center items-center w-full"
        onSubmit={sendEmail}
      >
        <div className="flex flex-col w-full md:w-[60%]">
          <span className="text-sm mb-1 text-bluesky">Nombre</span>
          <input
            type="text"
            className="w-full border border-bluesky mb-4 rounded-xl outline-bluesea p-2"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col w-full md:w-[60%]">
          <span className="text-sm mb-1 text-bluesky">Correo</span>
          <input
            type="text"
            className="w-full border border-bluesky mb-4 rounded-xl outline-bluesea p-2"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col w-full md:w-[60%]">
          <span className="text-sm mb-1 text-bluesky">Mensaje</span>
          <input
            type="text"
            className="w-full border border-bluesky mb-4 rounded-xl outline-bluesea p-2 "
            name="message"
            value={message}
            onChange={handleInputChange}
          />
        </div>
        <motion.button
          className="rounded-3xl text-lg py-2 px-8 my-4 bg-bluesea text-white shadow-lg shadow-bluesky hover:font-bold transition-all"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
        >
          Enviar
        </motion.button>
      </form>
    </div>
  );
};

export default Contact;
