import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";

import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../Api/cryptoApi";

const Cryptocurrencise = ({ simplified }) => {
  const count = simplified ? 10 : 100;

  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);

  const [searchTerm, setSearchTerm] = useState("");

  //For the search

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return "Loading cryptos....";

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Searrch Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency, uuid) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={uuid}>
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={
                  <img
                    alt="cryptoimg"
                    className="crypto-image"
                    src={currency.iconUrl}
                  />
                }
                hoverable
              >
                <p>Price: {currency.price}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Chnage: {millify(currency.change)} </p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencise;
