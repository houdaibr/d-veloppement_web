import React, { Component } from 'react';
import { Routes ,Route } from 'react-router-dom';
import logo from './logo.svg';
import img from './img.png'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar';
import Details from './Component/Details';
import Productlist from './Component/Productlist';
import Product from './Component/Product'; 
import Notfound from './Component/Notfound';
import Cart from './Component/Cart/';
import Modal from './Component/Modal';
import{ Signup} from './Component/Signup';
import {Login }from './Component/Login';
import Footer from './Component/Footer';
import Page from './Component/Page';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        
        <Routes>
          <Route exact path="/" element={<Productlist/>} />
          <Route  path="/signup" element={<Signup/>}/>
          <Route  path="/login" element={<Login/>}/>
          <Route path="/details" element={<Details/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/page" element={<Page />} />
          <Route element={<Notfound/>} />
        
        </Routes>
        <Footer></Footer>
        
        <Modal/>
        
      </React.Fragment>
    );

  }
  
}

export default App;