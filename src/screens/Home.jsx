import React from "react";
import BannerSection from "../components/BannerSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoSection from "../components/InfoSection";
import ProductsSection from "../components/ProductsSection";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />
      <BannerSection />
      <InfoSection />
      <ProductsSection />
      <div className="flex justify-center my-14">
        <Link to="/allproducts" className="md:w-5/12 btn btn-outline">
          Ver más
        </Link>
      </div>
      <Footer />
    </>
  );
}
