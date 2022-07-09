import React from "react";
import Profile from "../assets/profile.svg";

const Carrousel = () => {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride
    >
      <div className="carousel-inner">
        <div
          className="carousel-item active flex flex-col justify-center items-center"
          data-bs-interval="5000"
        >
          <div className="flex justify-center mt-4">
            <img
              src={Profile}
              alt=""
              className="d-block w-[100px] bg-bluedark border-4 border-bluesea p-2 rounded-full"
            />
          </div>
          <h1 className="text-center font-bold my-2">
            Marlon G. - Independiente
          </h1>
          <p className="text-center">
            Una persona muy comprometedora con su trabajo y además muy
            capacitado
          </p>
        </div>
        <div
          className="carousel-item active flex flex-col justify-center items-center"
          data-bs-interval="5000"
        >
          <div className="flex justify-center mt-4">
            <img
              src={Profile}
              alt=""
              className="d-block w-[100px] bg-bluedark border-4 border-bluesea p-2 rounded-full"
            />
          </div>
          <h1 className="text-center font-bold my-2">
            Juanes M. - Entrenador personalizado
          </h1>
          <p className="text-center">
            Mi página web ha sido excelente y mis clientes han aumentado, sin
            duda hace un gran trabajo
          </p>
        </div>
        <div
          className="carousel-item active flex flex-col justify-center items-center"
          data-bs-interval="5000"
        >
          <div className="flex justify-center mt-4">
            <img
              src={Profile}
              alt=""
              className="d-block w-[100px] bg-bluedark border-4 border-bluesea p-2 rounded-full"
            />
          </div>
          <h1 className="text-center font-bold my-2">Pablo M. - Eventos</h1>
          <p className="text-center">
            Recomiendo totalmente el servicio, sus diseños son muy acordes al
            mercado y hace un excelente trabajo
          </p>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon bg-bluesea rounded-full"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon bg-bluesea rounded-full"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carrousel;
