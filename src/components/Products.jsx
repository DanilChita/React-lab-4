import React, { useEffect } from "react";
import ProductItem from "./ProductItem";

const Products = ({
  products,
  category,
  setDisplayedProductCount,
  addToCart,
}) => {
  useEffect(() => {
    setDisplayedProductCount(products.length);
  }, []);

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8 py-4">
      {filteredProducts.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default Products;