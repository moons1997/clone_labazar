import React, { useContext } from "react";
import { contextApi } from "../services/Context";
import styled from "styled-components";
import { MdAddShoppingCart, MdRemoveShoppingCart } from "react-icons/md";
import { FiPlus, FiMinus } from "react-icons/fi";

const ProductWrapper = styled.div`
  .product_item {
    border: 1px solid #ccc;
    border-radius: 4px;
    text-align: center;
    padding: 0 10px 10px;
  }
  .product_title {
    color: #455463;
    font-size: 1rem;
    line-height: 1rem;
    height: 3.125rem;
    overflow: hidden;
    display: block;
    margin-top: 0.9375rem;
    margin-bottom: 0.3125rem;
    padding-left: 0;
    text-align: left;
  }
  .product_price {
    font-size: 1.125rem;
    color: #00a13c;
    font-weight: 500;
    display: block;
    text-align: left;
    margin-bottom: 15px;
  }
  .product_price span {
    font-size: 70%;
    color: #95a1ad;
  }
  .add_cart button {
    width: 100%;
  }
  .cart_count {
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .cart_count button {
    width: 25%;
  }
  .cart_count span {
    width: 50%;
  }
  .sale_info {
    text-align: left;
    background-color: #dc3545;
    width: 55px;
    padding: 2px 5px;
    margin-top: 10px;
    color: #fff;
    margin-left: -10px;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    font-weight: 500;
    font-size: 14px;
  }

  .product_number {
    background-color: #28a745;
    color: #fff;
    border-radius: 100px;
    padding: 5px;
    height: 40px;
    width: 40px;
    display: inline-block;
    font-weight: 500;
    font-size: 14px;
    position: absolute;
    top: 8px;
    right: 23px;
  }
  .product_price span.remove_product {
    color: #dc3545;
    font-size: 20px;
    position: relative;
    right: -65px;
  }
  .product_price span.remove_product:hover {
    cursor: pointer;
  }
`;

const Product = ({ product }) => {
  const {
    addToCart,
    handleIncrement,
    handleDecrement,
    removeItem,
  } = useContext(contextApi);
  return (
    <div className="col-lg-3">
      <ProductWrapper>
        <div className="product_item">
          {product.sale ? (
            <>
              <div className="sale_info">
                <span>- {product.sale} %</span>
              </div>
            </>
          ) : (
            ""
          )}
          {product.count ? (
            <>
              <div className="product_number d-flex align-items-center justify-content-center">
                <span>{product.count}</span>
              </div>
            </>
          ) : (
            ""
          )}

          <div className="img-container">
            <img
              src={product.img}
              alt={product.title}
              className="card-img-top"
            />
          </div>
          <h4 className="product_title">{product.title}</h4>
          <div className="product_price">
            <strong>
              {product.price} <span>сум.за 1щт</span>
              {product.count ? (
                <>
                  <span
                    className="remove_product"
                    onClick={() => {
                      removeItem(product.id);
                    }}
                  >
                    <MdRemoveShoppingCart />
                  </span>
                </>
              ) : (
                ""
              )}
            </strong>
          </div>
          <div className="add_cart">
            {product.inCart ? (
              <div className="cart_count d-flex align-items-center justify-content-center">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDecrement(product.id)}
                >
                  <FiMinus />
                </button>

                <span>{product.count} щт</span>

                <button
                  className="btn btn-primary"
                  onClick={() => handleIncrement(product.id)}
                >
                  <FiPlus />
                </button>
              </div>
            ) : (
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={() => {
                  addToCart(product.id);
                }}
              >
                <MdAddShoppingCart />В корзину
              </button>
            )}
          </div>
        </div>
      </ProductWrapper>
    </div>
  );
};

export default Product;
