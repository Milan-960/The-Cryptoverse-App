import React from "react";
import { Typography, Row, Col, Statistic } from "antd";

import { Link } from "react-router-dom";
import millify from "millify";

import { useGetCryptosQuery } from "../Api/cryptoApi";
import { Cryptocurrencise, News } from "../Routes/index";

const { Title } = Typography;

const Home = () => {
  //This is to show coins list from the API
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  if (isFetching) return "Loading...";

  return (
    <>
      <Title level={2} className="heading">
        Global Ceypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencise" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 CryptoCurrencies in the world
        </Title>
        <Title level={2} className="show-more">
          <Link to="/cryptocurrencise">show more</Link>
        </Title>
      </div>

      <Cryptocurrencise simplified={true} />

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={2} className="show-more">
          <Link to="/news">show more</Link>
        </Title>
      </div>

      <News simplified />
    </>
  );
};

export default Home;
