import { FaUser, FaHeart, FaShoppingCart, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="py-5 bg-white border-b">
        <div className="container max-w-screen-xl px-4 mx-auto">
          <div className="flex flex-col items-center gap-5 md:flex-row ">
            <div className="flex-shrink-0">
              <Link to="/">
                <h1 className="text-xl font-bold">Ecommerce</h1>
              </Link>
            </div>
            <div className="flex items-center justify-center order-last w-full flex-nowrap md:order-none">
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full border-gray-300 input lg:max-w-xs"
              />
            </div>
            <div className="flex items-center gap-3 flex-nowrap">
              <Link
                className="flex items-center gap-2 text-center text-gray-700 bg-white border border-gray-200 rounded-md shadow-sm btn hover:bg-gray-100 hover:border-gray-300 flex-nowrap shrink"
                to="/login"
              >
                <FaUser className="w-5 text-gray-400" />
                <span className="hidden lg:inline">Iniciar sesión</span>
              </Link>

              <Link
                className="flex items-center gap-2 text-center text-gray-700 bg-white border border-gray-200 rounded-md shadow-sm btn hover:bg-gray-100 hover:border-gray-300 flex-nowrap shrink"
                to="/"
              >
                <FaHeart className="text-gray-400 " />
                <span className="hidden lg:inline">Favoritos</span>
              </Link>

              <Link
                className="flex items-center gap-2 text-center text-gray-700 bg-white border border-gray-200 rounded-md shadow-sm btn hover:bg-gray-100 hover:border-gray-300 flex-nowrap shrink"
                to="/"
              >
                <FaShoppingCart className="w-5 text-gray-400" />
                <span className="hidden lg:inline">Mi carrito</span>
              </Link>
              <div className="ml-2 lg:hidden">
                <button
                  type="button"
                  className="inline-flex items-center p-3 text-black bg-white border border-transparent rounded-md hover:bg-gray-200 hover:text-gray-800"
                >
                  <FaBars />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav className="relative shadow-sm">
        <div className="container max-w-screen-xl px-4 mx-auto">
          <div className="items-center justify-center hidden py-1 lg:flex">
            <Link className="px-3 py-2 rounded-md hover:bg-gray-100" to="/">
              Categorias
            </Link>
            <Link className="px-3 py-2 rounded-md hover:bg-gray-100" to="/">
              Vender
            </Link>
            <Link className="px-3 py-2 rounded-md hover:bg-gray-100" to="/">
              Servicios
            </Link>
            <Link className="px-3 py-2 rounded-md hover:bg-gray-100" to="/">
              Ofertas
            </Link>
            <Link className="px-3 py-2 rounded-md hover:bg-gray-100" to="/">
              Ayuda / PQR
            </Link>
            <Link className="px-3 py-2 rounded-md hover:bg-gray-100" to="/">
              Otros
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
