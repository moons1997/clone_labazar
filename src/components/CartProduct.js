import React, { useContext } from "react";
import { contextApi } from "../services/Context";

import { MdRemoveShoppingCart } from "react-icons/md";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

const CartProduct = ({ product }) => {
  const { handleIncrement, handleDecrement, removeItem } = useContext(
    contextApi
  );
  return (
    <div className=" d-flex justify-content-around align-items-center">
      <div className="cart_count">
        <div
          onClick={() => {
            handleIncrement(product.id);
          }}
        >
          <AiOutlineCaretUp />
        </div>
        <span>{product.count} шт</span>
        <div
          onClick={() => {
            handleDecrement(product.id);
          }}
        >
          <AiOutlineCaretDown />
        </div>
      </div>
      <div className="img_container">
        <img src={product.img} alt={product.title} className="card-img-top" />
      </div>
      <div className="cart_product_info">
        <div className="cart_product_title">{product.title}</div>
        <div className="cart_product_price">
          {product.total} ({product.price} сум. за 1 шт)
        </div>
      </div>
      <div
        className="remove_product"
        onClick={() => {
          removeItem(product.id);
        }}
      >
        <MdRemoveShoppingCart />
      </div>
    </div>
  );
};

export default CartProduct;
