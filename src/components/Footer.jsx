import React from "react";

export default function Footer() {
  return (
    <footer className="bg-base-200">
      <section className="py-12 text-black">
        <div className="container max-w-screen-xl px-4 mx-auto">
          <div className="flex flex-wrap">
            <aside className="w-full mb-5 md:w-1/3 lg:w-1/4">
              <p className="text-lg font-bold">Ecommerce</p>
              <p className="my-4">
                Ecommerce. <br /> © 2022. <br />
                Todos los derechos reservados.
              </p>
            </aside>
            <aside className="flex-auto w-1/2 mb-5 sm:w-auto">
              <h3 className="font-semibold"> Tiendas </h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <a href="/" className="opacity-70 hover:opacity-100">
                    Ingresar
                  </a>
                </li>
                <li>
                  <a href="/" className="opacity-70 hover:opacity-100">
                    Encontrar tienda
                  </a>
                </li>
                <li>
                  <a href="/" className="opacity-70 hover:opacity-100">
                    Categorias
                  </a>
                </li>
              </ul>
            </aside>
            <aside className="flex-auto w-1/2 mb-5 sm:w-auto">
              <h3 className="font-semibold"> About </h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <a href="/" className="opacity-70 hover:opacity-100">
                    Acerca de
                  </a>
                </li>
                <li>
                  <a href="/" className="opacity-70 hover:opacity-100">
                    Nuestra historia
                  </a>
                </li>
                <li>
                  <a href="/" className="opacity-70 hover:opacity-100">
                    Nuestro equipo
                  </a>
                </li>
              </ul>
            </aside>
            <aside className="flex-auto w-1/2 mb-5 sm:w-auto">
              <h3 className="font-semibold"> Ayuda </h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <a href="/" className="opacity-70 hover:opacity-100">
                    Contactanos
                  </a>
                </li>
                <li>
                  <a href="/" className="opacity-70 hover:opacity-100">
                    Enviar un ticket
                  </a>
                </li>
                <li>
                  <a href="/" className="opacity-70 hover:opacity-100">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="/" className="opacity-70 hover:opacity-100">
                    Reembolsos
                  </a>
                </li>
              </ul>
            </aside>
            <aside className="flex-auto w-1/2 mb-5 sm:w-auto">
              <h3 className="font-semibold"> Links </h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <a href="/" className="opacity-70 hover:opacity-100">
                    Nuestros terminos
                  </a>
                </li>
                <li>
                  <a href="/" className="opacity-70 hover:opacity-100">
                    Ajustes de privacidad
                  </a>
                </li>
                <li>
                  <a href="/" className="opacity-70 hover:opacity-100">
                    Registrarse
                  </a>
                </li>
              </ul>
            </aside>
            <aside className="w-full mb-5 md:w-1/2 lg:w-1/4">
              <h3 className="mb-2 font-semibold">Novedades</h3>
              <p className="mb-5 text-black text-opacity-70">
                Enterate de todas nuestras novedades, productos y ofertas!
              </p>
              <form className="flex w-80">
                <input
                  className="bg-gray-100 rounded-r-none input input-bordered rounded-tl-md rounded-bl-md"
                  type="email"
                  placeholder="Email"
                />

                <button className="rounded-l-none btn">
                  Enviar
                </button>
              </form>
            </aside>
          </div>
        </div>
      </section>
      <section className="py-6 text-black bg-base-300">
        <div className="container max-w-screen-xl px-4 mx-auto">
          <div className="justify-between lg:flex">
            <div className="mb-3">
              <p>Metodos de pago</p>
            </div>
            <div className="space-x-6">
              <nav className="space-x-4 text-sm">
                <a href="/" className="opacity-70 hover:opacity-100">
                  Soporte
                </a>
                <a href="/" className="opacity-70 hover:opacity-100">
                  Privacidad &amp; Cookies
                </a>
                <a href="/" className="opacity-70 hover:opacity-100">
                  Accesibilidad
                </a>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
