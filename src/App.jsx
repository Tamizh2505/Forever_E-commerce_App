import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pags/Home";
import Collection from "./pags/Collection";
import Cart from "./pags/Cart";
import About from "./pags/About";
import Contact from "./pags/Contact";
import Login from "./pags/Login";
import Orders from "./pags/Orders";
import PlaceOrder from "./pags/PlaceOrder";
import Product from "./pags/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/searchBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <ToastContainer />
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
        <Footer />
      </div>
    
  );
};

export default App;

