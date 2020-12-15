import React, { useContext } from "react";
import { contextApi } from "../services/Context";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import { logo } from "../config.json";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";

const MenuWrapper = styled.div`
  .navbar {
    padding: 20px 0;
  }
  .navbar-light .navbar-brand {
    display: block;
    width: 15%;
  }
  .navbar-light .navbar-brand img {
    width: 100%;
  }
  .cart_count {
    padding: 6px 10px 8px;
  }
  .cart_count span {
    background-color: #dc3545;
    color: #fff;
    border-radius: 100px;
    padding: 5px;
    height: 30px;
    width: 30px;
    display: inline-block;
    font-weight: 500;
    font-size: 12px;
    position: absolute;
    top: -16px;
    right: -15px;
  }
  .cart_count svg {
    margin-right: 10px;
    font-size: 20px;
  }
  .menu_toogle {
    padding: 5px 50px 5px 20px;
    font-size: 20px;
    color: #00a13c;
  }
  .menu_toogle:hover {
    cursor: pointer;
  }
`;

const Menu = () => {
  const { cart, addCart } = useContext(contextApi);
  // console.log(cart.length);
  return (
    <MenuWrapper>
      <div className="container">
        <Navbar expand="lg">
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <div className="menu_toogle">
                <FaBars />
                <HiChevronDown />
              </div>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Nav>

            <div
              className="ml-auto btn btn-success cart_count position-relative"
              onClick={addCart}
            >
              {cart.length ? (
                <>
                  <span className="d-flex align-items-center justify-content-center">
                    {cart.length}
                  </span>
                </>
              ) : (
                ""
              )}
              <HiShoppingCart />
              корзина
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </MenuWrapper>
  );
};

export default Menu;
