import React from "react";
import { Link } from "react-router-dom";

export default function RegisterForm() {
  return (
    <div className="max-w-screen-sm p-10 mx-auto my-20 bg-white shadow-md card">
      <form action="">
        <h2 className="mb-10 text-5xl font-bold text-center">Registrarse</h2>
        <div className="grid md:grid-cols-2 gap-x-2">
          <div className="mb-4">
            <label className="block mb-1 text-lg font-semibold">
              {" "}
              Nombres{" "}
            </label>
            <input
              className="w-full input input-bordered"
              type="text"
              placeholder="Nombres completos"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-lg font-semibold">
              {" "}
              Apellidos{" "}
            </label>
            <input
              className="w-full input input-bordered"
              type="text"
              placeholder="Apellidos completos"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-lg font-semibold"> Teléfono </label>
          <div className="flex w-full">
            <input
              className="w-24 rounded-r-none input input-bordered"
              type="text"
              placeholder="Codigo"
            />
            <input
              className="flex-1 w-full rounded-l-none input input-bordered"
              type="text"
              placeholder="Número de telefono"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-lg font-semibold"> Correo electronico </label>
          <input
            className="w-full input input-bordered"
            type="text"
            placeholder="correo@correo.com"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-lg font-semibold"> Contraseña </label>
          <input
            className="w-full input input-bordered"
            type="password"
            placeholder="*****"
          />
        </div>
        <button
          type="submit"
          className="w-full my-5 btn btn-success"
        >
          Registrarse
        </button>
        <label className="flex items-center my-4 w-max">
          <input type="checkbox" className="checkbox" checked="checked" />
          <span className="inline-block ml-2">
            Acepto terminos y condiciones
          </span>
        </label>

        <hr />

        <p className="mt-5 text-center">
          ¿Ya tienes una cuenta?
          <Link className="ml-5 text-blue-500" to="/login">
            Iniciar sesión
          </Link>
        </p>
      </form>
    </div>
  );
}
