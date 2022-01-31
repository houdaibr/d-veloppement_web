import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo.svg";
import img2 from "../img2.png";
import { ButtonContainer } from "./Button";
import { auth } from "./Config/Config";
import Page from "./Page";

export default class Navbar extends Component {
  render() {
    return (
      
      <Nav className="navbar navbar-dark  justify-content-between">
        <a class="navbar-brand" href="#">
<Link to="/">
          <img src={img2} alt="store" className="navbar-brand" />
        </Link> </a>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item mr-sm-2">
            <Link to="/" className="nav-link">
              <h1>Welcome to our website</h1>
            </Link>
          </li>
        </ul>
        <ul className='nav'>
      <li className="nav-item">
      <Link className="nav-link" to="login" >Login</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="signup" >Sign up</Link>
          </li>
          <li className="nav-item">
      <Link className="nav-link" to="Page" >Contact Us</Link>
          </li>
          <li>
            <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className=" my-2 my-sm-0">
              <i className="fas fa-cart-plus " />
            </span>
            my cart
          </ButtonContainer>
        </Link>
    </li>
    </ul>
        
      </Nav>
    );
  }
}

const Nav = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1rem;
    text-transform:capitalize;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;