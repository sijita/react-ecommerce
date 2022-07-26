import ProductsCard from "./ProductsCard";
import useSWR from "swr";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function ProductsSection() {
  const fetcher = (url) => axios.get(url).then((res) => res.data);

  const { pathname } = useLocation();

  const totalProducts =
    pathname === "/" ? 8 : pathname === "/allproducts" ? 20 : 0;

  const { data } = useSWR(
    `https://fakestoreapi.com/products?limit=${totalProducts}`,
    fetcher
  );

  return (
    <div className="container max-w-screen-xl p-12 mx-auto my-20 lg:p-0">
      <h2 className="mb-8 text-3xl font-bold">
        {pathname === "/" ? "Productos recomendados" : "Todos nuestros productos"}
      </h2>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {data &&
          data.map((product, index) => (
            <ProductsCard
              key={index}
              image={product.image}
              imageDescription={product.category}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
      </div>
    </div>
  );
}
