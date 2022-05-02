import React from "react";

import { Typography, Space } from "antd";
import { Link } from "react-router-dom";

import "../App.css";

export const Footer = () => {
  return (
    <div className="footer">
      <Typography.Title
        level={5}
        style={{ color: "white", textAlign: "center" }}
      >
        Copyright © 2022
        <Link to="/"> Cryptoverse Inc.</Link> <br />
        All Rights Reserved.
      </Typography.Title>
      <Space>
        <Link to="/">Home</Link>
        <Link to="/exchanges"> Exchanges</Link>
        <Link to="/news">News</Link>
      </Space>
    </div>
  );
};
