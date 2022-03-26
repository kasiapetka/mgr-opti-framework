import React from "react";

type Props = {
  product: {
    id: string;
    name: string;
    tags: Array<string>;
    price: number;
    image: string;
    description: string;
  };
};

const ProductCard = (props: Props) => {
  return (
    <div className="ProductCard">
      <img src={props.product.image} alt="" height={350} />
      <h5>{props.product.name}</h5>
      <p>{props.product.description}</p>
      <p>{props.product.price} zł</p>
    </div>
  );
};

export default ProductCard;
