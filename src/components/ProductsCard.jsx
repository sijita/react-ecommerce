import { FaHeart } from "react-icons/fa";

export default function ProductsCard({
  image,
  imageDescription,
  title,
  description,
  price,
}) {
  return (
    <div className="shadow card bg-base-100">
      <figure>
        <img src={image} className="w-full h-64" alt={imageDescription} />
      </figure>
      <div className="gap-5 card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p className="flex items-end font-bold">Precio: {price}$</p>
        <div className="justify-between card-actions">
          <button className="btn btn-neutral btn-outline">
            Añadir al carrito
          </button>
          <button className="btn btn-error btn-outline">
            <FaHeart />
          </button>
        </div>
      </div>
    </div>
  );
}
