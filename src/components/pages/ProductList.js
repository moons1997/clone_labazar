import React, { useContext } from "react";
import { contextApi } from "../../services/Context";

import styled from "styled-components";
import Product from "../Product";

const ProductListWrapper = styled.div`
  padding-top: 50px;
`;

const ProductList = () => {
  const { products } = useContext(contextApi);
  return (
    <ProductListWrapper>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </ProductListWrapper>
  );
};

export default ProductList;
