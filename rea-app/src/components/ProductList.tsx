import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import api from "../api/api-service";

type Props = {};

const LIMIT_PRODUCTS_PER_LOAD = 6;

const ProductList = (props: Props) => {
  const [products, setProducts] = useState<any>([]);
  const [productsLoaded, setProductsLoaded] = useState(LIMIT_PRODUCTS_PER_LOAD);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    api
      .get(`/products`, { "filter[limit]": LIMIT_PRODUCTS_PER_LOAD })
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    if (isMounted) {
      api
        .get(`/products`, {
          "filter[limit]": LIMIT_PRODUCTS_PER_LOAD,
          "filter[skip]": productsLoaded,
        })
        .then((data) => {
          setProducts([...products, ...data]);
          console.log("wchodze");
        });
      setIsMounted(false);
    }
  }, [isMounted]);

  const handleLoadMore = () => {
    setProductsLoaded(productsLoaded + LIMIT_PRODUCTS_PER_LOAD);
    setIsMounted(true);
  };

  return (
    <React.Fragment>
      <div className="ProductList">
        {products.map((product: any, index: number) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <div className="Loadmore">
        <button onClick={handleLoadMore}>Load more</button>
      </div>
    </React.Fragment>
  );
};

export default ProductList;
