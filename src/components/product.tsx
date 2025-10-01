import React from "react";
import MainProduct from "./product-main";


const ProductCont = () => {
  return (
    <section id="products" className="container px-4 py-20 mx-auto max-w-7xl 2xl:max-w-[1800px]">
      <header className="mb-15">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight whitespace-nowrap">
          Featured Collection
        </h2>
        <p className="text-muted-foreground mt-2">
          Thoughtfully curated best-sellers loved for their quality and finish.
        </p>
      </header>
      
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <MainProduct />
        <MainProduct />
        <MainProduct />
        <MainProduct />
      </div>
    </section>
  );
};

export default ProductCont;
