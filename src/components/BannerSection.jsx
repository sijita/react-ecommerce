import React from "react";

export default function BannerSection() {
  return (
    <section className="bg bg-gray-800">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="pl-5 py-10 sm:py-20">
          <article className="my-10">
            <h1 className="text-3xl md:text-5xl text-white font-bold">
              Los mejores productos &amp; <br />
              Las mejores marcas
            </h1>
            <p className="text-lg text-white font-normal mt-4 mb-6">
              Productos tendencia, precios de fabrica, excelente servicio
            </p>
            <div className="flex gap-2">
              <a
                className="btn font-semibold bg-yellow-500 text-white border border-transparent rounded-md hover:bg-yellow-600"
                href="/"
              >
                Descubrir
              </a>
              <a
                className="btn font-semibold text-blue-600 border border-transparent rounded-md hover:bg-gray-100 bg-white"
                href="/"
              >
                Saber más
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
