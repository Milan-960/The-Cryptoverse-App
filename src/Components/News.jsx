import React from "react";

import { Select, Typography, Row, Col, Input, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../Api/cryptoNewsApi";
import { useGetCryptosQuery } from "../Api/cryptoApi";

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage =
  "https://www.bing.com/th?id=OVFT.41IpjBTpjgYceAbCpWmuHS&pid=News";

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");

  const [data] = useGetCryptosQuery(count);

  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 9 : 100,
  });

  if (!cryptoNews?.value) return "Loading cryptos....";

  return (
    <>
      <Row gutter={[24, 24]} className="crypto-card-container">
        {!simplified && (
          <Col span={24}>
            <Input
              showSearch
              className="select-news"
              placeholder="Search Cryptocurrency News"
              optionFilterProp="children"
              onChange={(value) => console.log(value)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            />
            <Option value="Cryptocurrency"></Option>
          </Col>
        )}

        {cryptoNews.value.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card className="news-card" hoverable>
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>
                    {news.name}
                  </Title>
                  <img
                    alt="cryptonews"
                    src={news?.image?.thumbnail?.contentUrl || demoImage}
                  />
                </div>
                <p>
                  {news.description > 100
                    ? `${news.description.substring(0, 100)}...`
                    : news.description}
                </p>
                <div className="provider-container">
                  <div>
                    <Avatar
                      src={
                        news.provider[0]?.image?.thumbnail?.contentUrl ||
                        demoImage
                      }
                      alt="newss"
                    />
                    <Text className="provider-name">
                      {news.provider[0]?.name}
                    </Text>
                  </div>
                  <div>
                    <Text>
                      {moment(news.dataPublished).startOf("ss").fromNow()}
                    </Text>
                  </div>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
