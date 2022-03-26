import React from "react";
import ProductList from "./ProductList";
import Filter from "./utilities/Filter";
import Search from "./utilities/Search";

type Props = {};

const ProductListingPage = (props: Props) => {
  return (
    <div className="ProductListingPage">
      <Search />
      <Filter />
      <ProductList />
    </div>
  );
};

export default ProductListingPage;
