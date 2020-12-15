import React, { useContext } from "react";
import styled from "styled-components";
import { contextApi } from "../services/Context";
import { MdClose } from "react-icons/md";
import CartProduct from "./CartProduct";

const CartWrapper = styled.div`
  .cartToogle {
    transform: translateX(150%);
    height: 100vh;
    width: 430px;
    background-color: #e3e3e3;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    transition: all 0.3s ease-in-out;
  }
  .cartToogle.active {
    transform: translateX(0);
  }
  .cart_header {
    border-bottom: 1px solid #ccc;
    padding: 10px 15px;
  }
  .cart_close {
    font-size: 25px;
  }
  .cart_close:hover {
    cursor: pointer;
  }
  .cart_title {
    color: #3c3c3c;
  }
  .cart_body {
    padding: 10px 15px;
  }
  .total_product {
    font-size: 20px;
    // color: #cecece;
    margin-bottom: 20px;
  }
  .total_product span {
    font-size: 14px;
    color: #00a13c;
    padding-left: 15px;
  }
  .total_product span:hover {
    cursor: pointer;
  }
  .cart_count {
    width: 20%;
  }
  .img_container {
    width: 30%;
  }
  .cart_product_info {
    width: 40%;
  }
  .remove_product {
    width: 10%;
  }
`;

const Cart = () => {
  const {
    cart,
    clearCart,
    cartTotal,
    subTotal,
    sale,
    cartToogle,
    removeCart,
  } = useContext(contextApi);

  return (
    <CartWrapper>
      <div className={cartToogle ? "cartToogle active" : "cartToogle"}>
        <div className="cart_header d-flex justify-content-between">
          <h2 className="cart_title">Корзина</h2>
          <div className="cart_close" onClick={removeCart}>
            <MdClose />
          </div>
        </div>

        <div className="cart_body">
          <div className="total_product">
            Всего товаров: {cart.length}
            <span onClick={clearCart}>Очистить корзину</span>
          </div>

          <div className="price_info mb-4">
            <div className="d-flex justify-content-between">
              <b>Стоимость :</b>
              <div> {subTotal} сумов</div>
            </div>
            <div className="d-flex justify-content-between">
              <b>Скидка :</b>
              <div> {sale} сумов</div>
            </div>
          </div>

          {cart.map((item) => (
            <CartProduct product={item} key={item.id} />
          ))}
          <button className="btn btn-success w-100 mt-5">
            Продолжить {cartTotal} сумов
          </button>
        </div>
      </div>
    </CartWrapper>
  );
};

export default Cart;
