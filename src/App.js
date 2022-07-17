import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";

import {
  Navbar,
  Exchanges,
  Cryptocurrencise,
  CryptoDetails,
  News,
  Home,
} from "Routes/index";

import "./App.css";

import { Footer } from "Components/Footer";

const App = () => {
  return (
    <>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exchanges" element={<Exchanges />} />
                <Route
                  path="/cryptocurrencise"
                  element={<Cryptocurrencise />}
                />
                <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                <Route path="/news" element={<News />} />
              </Routes>
            </div>
          </Layout>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
