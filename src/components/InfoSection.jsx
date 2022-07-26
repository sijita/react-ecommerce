import {
  FaMoneyBill,
  FaStar,
  FaPlane,
  FaUsers,
  FaThumbsUp,
  FaBox,
} from "react-icons/fa";

export default function InfoSection() {
  return (
    <section className="container max-w-screen-xl mx-auto p-12 lg:p-0 my-20">
        <h2 className="text-3xl font-bold mb-8">¿Por qué escogernos?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <figure className="flex mb-4">
              <div className="flex-shrink-0 mr-3">
                <span className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <FaMoneyBill className="text-2xl" />
                </span>
              </div>
              <figcaption>
                <h5 className="font-semibold">Precios razonables</h5>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
              </figcaption>
            </figure>
          </div>
          <div>
            <figure className="flex mb-4">
              <div className="flex-shrink-0 mr-3">
                <span className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <FaStar className="text-xl" />
                </span>
              </div>
              <figcaption>
                <h5 className="font-semibold">La mejor calidad</h5>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
              </figcaption>
            </figure>
          </div>
          <div>
            <figure className="flex mb-4">
              <div className="flex-shrink-0 mr-3">
                <span className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <FaPlane className="text-2xl" />
                </span>
              </div>
              <figcaption>
                <h5 className="font-semibold">Envios mundiales</h5>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
              </figcaption>
            </figure>
          </div>
          <div>
            <figure className="flex mb-4">
              <div className="flex-shrink-0 mr-3">
                <span className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <FaUsers className="text-2xl" />
                </span>
              </div>
              <figcaption>
                <h5 className="font-semibold">Satisfacción de los clientes</h5>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
              </figcaption>
            </figure>
          </div>
          <div>
            <figure className="flex mb-4">
              <div className="flex-shrink-0 mr-3">
                <span className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <FaThumbsUp className="text-xl" />
                </span>
              </div>
              <figcaption>
                <h5 className="font-semibold">Clientes felices</h5>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
              </figcaption>
            </figure>
          </div>
          <div>
            <figure className="flex mb-4">
              <div className="flex-shrink-0 mr-3">
                <span className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <FaBox className="text-xl"></FaBox>
                </span>
              </div>
              <figcaption>
                <h5 className="font-semibold">Miles de productos</h5>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
  );
}
